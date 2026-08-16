import { useEffect, useRef, useState } from 'react';

// Unity-side target for SendMessage. These must match a GameObject name and a
// public method in the Unity project, e.g.:
//   public class WebGLBridge : MonoBehaviour {
//     public void ReceiveAction(string action) { ... }
//   }
const UNITY_GAME_OBJECT = 'WebGLBridge';
const UNITY_METHOD = 'ReceiveAction';

// The three actions surfaced by the right-hand panel.
const ACTIONS = ['Action1', 'Action2', 'Action3'];

export default function UnityActionPanel({ iframeRef }) {
  const [isReady, setIsReady] = useState(false);
  const readyRef = useRef(false);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.data && event.data.type === 'unity-ready') {
        readyRef.current = true;
        setIsReady(true);
      }
    };

    // Direct same-origin check, used both as an immediate check and as a
    // fallback in case the "unity-ready" message was posted before this
    // component mounted (e.g. after a hot reload).
    const checkReady = () => {
      const win = iframeRef.current && iframeRef.current.contentWindow;
      if (win && win.unityInstance) {
        readyRef.current = true;
        setIsReady(true);
        return true;
      }
      return false;
    };

    window.addEventListener('message', onMessage);

    if (!checkReady()) {
      const pollId = setInterval(() => {
        if (checkReady()) {
          clearInterval(pollId);
        }
      }, 500);

      return () => {
        clearInterval(pollId);
        window.removeEventListener('message', onMessage);
      };
    }

    return () => window.removeEventListener('message', onMessage);
  }, [iframeRef]);

  const handleClick = (action) => {
    const win = iframeRef.current && iframeRef.current.contentWindow;
    const unityInstance = win && win.unityInstance;
    if (unityInstance) {
      unityInstance.SendMessage(UNITY_GAME_OBJECT, UNITY_METHOD, action);
    }
  };

  return (
    <aside
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-4 md:right-6"
      aria-label="Unity action controls"
    >
      {ACTIONS.map((action, index) => (
        <button
          key={action}
          type="button"
          onClick={() => handleClick(action)}
          disabled={!isReady}
          title={`Send ${action} to Unity`}
          aria-label={`Send ${action} to Unity`}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-dark/40 font-mono text-sm font-bold text-primary backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40 md:h-14 md:w-14"
        >
          {index + 1}
        </button>
      ))}
    </aside>
  );
}
