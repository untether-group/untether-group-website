import { useEffect, useRef, useState } from 'react';
import { Music2, Martini, Skull } from 'lucide-react';

// Unity-side target for SendMessage. These must match a GameObject name and a
// public method in the Unity project, e.g.:
//   public class WebGLBridge : MonoBehaviour {
//     public void ReceiveAction(string action) { ... }
//   }
const UNITY_GAME_OBJECT = 'WebGLBridge';
const UNITY_METHOD = 'ReceiveAction';

// The three actions surfaced by the right-hand panel, each mapped to an icon
// and a hover background. Hover lightness descends from top (lightest) to
// bottom (darkest, matching the accent color).
const ACTIONS = [
  { value: 'Action1', label: 'Music note 2', Icon: Music2, hoverBg: 'hover:bg-[hsl(284,84%,55%)]' },
  { value: 'Action2', label: 'Nightlife', Icon: Martini, hoverBg: 'hover:bg-[hsl(284,84%,41%)]' },
  { value: 'Action3', label: 'Skull and crossbones', Icon: Skull, hoverBg: 'hover:bg-accent' },
];

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
      className="absolute right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-4 md:right-6"
      aria-label="Unity action controls"
    >
      {ACTIONS.map(({ value, label, Icon, hoverBg }) => (
        <button
          key={value}
          type="button"
          onClick={() => handleClick(value)}
          disabled={!isReady}
          title={`${label} — ${value}`}
          aria-label={`Send ${value} to Unity (${label})`}
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-dark/40 text-primary backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40 md:h-14 md:w-14 ${hoverBg}`}
        >
          <Icon size={22} aria-hidden="true" />
        </button>
      ))}
    </aside>
  );
}
