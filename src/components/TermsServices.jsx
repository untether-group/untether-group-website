import React, { useEffect } from 'react';

export default function TermsServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-surface pt-32 pb-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-accent mb-2">Terms and Conditions</h1>
        <h2 className="text-lg text-dark/60 font-semibold mb-2">For the supply of services of Untether Ltd.</h2>
        <div className="text-xs text-dark/50 mb-6 pb-4 border-b border-dark/10">Last updated: 2025-12-14</div>
        <div className="flex flex-col gap-8">
          {/* 1. DEFINITIONS */}
          <section>                   
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">1. DEFINITIONS</h3>
            <p>In this document the following words shall have the following meanings:</p>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.1</b> "Agreement" means these Terms and Conditions together with the terms of any applicable Statement of Work;</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.2</b> "Customer" means the organisation or person who purchases services and/or Deliverables from the Supplier;</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.3</b> “Intellectual Property Rights” means patents, utility models, rights to inventions, copyright and related rights, trade marks, trade names and domain names, rights in designs, rights in computer software, database rights, moral rights, rights to confidential information (including know-how and trade secrets) and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, renewals or extensions of, and rights to claim priority from, such rights.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.4</b> "Confidential Information" means any information disclosed by one party (the "Disclosing Party") to the other party (the "Receiving Party") in connection with this Agreement which is marked as confidential, proprietary, or trade secret, or which, under the circumstances, should reasonably be considered confidential. This includes, but is not limited to, trade secrets, proprietary technology, source code, research, development plans, product designs, business plans, marketing materials, financial data, and personal data.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.5</b> "Statement of Work" means a statement of work, quotation or other similar document describing the services and Deliverables to be provided by the Supplier.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.6</b> "Statutory Interest" means statutory interest as defined in the Late Payment of Commercial Debts (Interest) Act 1998 as amended & supplemented by the Late Payment of Commercial Debts Regulations 2002.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.7</b>  "Effective Date" means the date on which the Customer signs or otherwise accepts the Statement of Work to which these Terms and Conditions are attached.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.8</b> "Business Day" means a day other than a Saturday, Sunday or public holiday in England when banks in London are open for business.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.9</b> "Deliverables" means the services and Deliverables to be supplied by the Supplier (including, without limitation, the development of software, games, applications and related consultancy services) as described in the Statement of Work.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.10</b> “Software” means the software components of the Deliverables (including any games, applications or tools developed by the Supplier under this Agreement) in object code form and, where expressly stated in the Statement of Work, in source code form.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>1.10</b> "Supplier" means Untether Ltd, 61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United Kingdom.</div>
            </div>
          </section>
          {/* 2. GENERAL */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">2. GENERAL</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>2.1</b> These Terms and Conditions shall apply to all contracts for the supply of services and Deliverables by the Supplier to the Customer.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>2.2</b> Before the commencement of the services the Supplier shall submit to the Customer a Statement of Work which shall specify the services and Deliverables to be supplied and the price payable. The Customer shall notify the Supplier immediately if the Customer does not agree with the contents of the Statement of Work. All Statement of Works shall be subject to these Terms and Conditions.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>2.3</b> The Supplier shall use all reasonable endeavours to complete the services within estimated time frames but time shall not be of the essence in the performance of any services.</div>
            </div>
          </section>
          {/* 3. PRICE AND PAYMENT */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">3. PRICE AND PAYMENT</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>3.1</b> The price for the supply of services and Deliverables is set out in the Statement of Work. The Supplier shall invoice the Customer upon the completion of agreed-upon project milestones, as detailed in the Statement of Work. The Customer shall pay the invoiced amount for each completed milestone within a 30-day period of receiving the invoice, unless otherwise agreed in writing. An initial payment may be required upon commencement of the Project, as specified in the Statement of Work.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>3.2</b> The customer shall have five working days to dispute the invoice. After such a period of time the invoice will be considered accepted by both parties and cannot be amended unless agreed in writing by the Supplier.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>3.3</b> The Supplier shall be entitled to charge Statutory Interest on overdue invoices from the date when payment becomes due until payment is made. In the event that the Customer's procedures require that an invoice be submitted against a purchase order for payment, the Customer shall be responsible for issuing such purchase order before the services and Deliverables are supplied.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>3.4</b> If the Customer fails to make any payment when due, the Supplier may suspend performance of the services and/or delivery of the Deliverables until such payment is made.</div>
            </div>
          </section>
          {/* 4. SPECIFICATION OF SERVICES AND DELIVERABLES */}
          <section>

            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">4. SPECIFICATION OF SERVICES AND DELIVERABLES</h3>
            <p>The Deliverables shall only be required to conform in all material respects to the Statement of Work. For the avoidance of doubt no description, specification or illustration contained in any brochure, website, proposal or other sales or marketing literature of the Supplier and no representation, whether written or oral, correspondence or statement shall form part of the contract unless expressly set out in the Statement of Work.</p>
          </section>

          {/* 5. DELIVERY AND ACCEPTANCE */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">5. DELIVERY AND ACCEPTANCE</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>5.1</b> Unless otherwise stated in the Statement of Work, the Deliverables shall be delivered by electronic means, including (without limitation) by download link, file transfer, email, or by granting the Customer access to a source code repository or project management system.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>5.2</b> On delivery of the Deliverables, the Customer shall have 10 Business Days (the “Acceptance Period”) to test the Deliverables to confirm that they materially conform to the Statement of Work.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>5.3</b> The Customer shall notify the Supplier in writing before the end of the Acceptance Period if the Deliverables do not materially conform to the Statement of Work, giving reasonable details of any defects or non-conformities.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>5.4</b> If the Customer notifies the Supplier under clause 5.3, the Supplier shall use reasonable efforts to correct the reported defects and redeliver the affected Deliverables. The Customer shall then have a further 5 Business Days from redelivery to re-test the Deliverables.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>5.5</b> The Deliverables shall be deemed accepted on the earliest of:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>5.5.1</b> the Customer confirming acceptance in writing; or</div>
                  <div><b>5.5.2</b> the Customer using the Deliverables in a live or production environment; or</div>
                  <div><b>5.5.3</b> the expiry of the applicable Acceptance Period without the Customer having notified any material non-conformities in accordance with clause 5.3.</div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. DELIVERABLES AND LICENCE */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">6. DELIVERABLES AND LICENCE</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>6.1</b> Except to the extent that the relevant Statement of Work expressly provides otherwise in respect of specified Deliverables, all Intellectual Property Rights in the Deliverables shall be owned by the Supplier in accordance with clause 13. No title or ownership in any software, games, applications or other Deliverables is transferred to the Customer under this Agreement.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>6.2</b> Subject to the Customer’s payment in full of the charges set out in the Statement of Work, the Supplier grants to the Customer a non-exclusive, non-transferable, non-sublicensable licence to use the Deliverables:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>6.2.1</b> solely for the application, game or project described in the Statement of Work (including any agreed platform or brand variants specified there); and</div>
                  <div><b>6.2.2</b> solely for the Customer’s business purposes and to make the Deliverables available to end users as part of that application, game or project.</div>
                </div>
              </div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>6.3</b> The Customer shall not (and shall not permit any third party to) copy, adapt, modify, localise, reskin or create derivative works based on the Deliverables, nor reverse engineer, decompile or disassemble the Deliverables, except to the extent permitted by law or expressly authorised in writing by the Supplier. Any changes, reskins or new versions of the Deliverables shall be implemented only by the Supplier under a separate Statement of Work and fee agreement, unless the Supplier agrees otherwise in writing.</div>
            </div>
          </section>

          {/* 7. CUSTOMER'S OBLIGATIONS */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">7. CUSTOMER'S OBLIGATIONS</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>7.1</b> To enable the Supplier to perform its obligations under this Agreement the Customer shall:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>7.1.1</b> co-operate with the Supplier;</div>
                  <div><b>7.1.2</b> provide the Supplier with any information reasonably required by the Supplier;</div>
                  <div><b>7.1.3</b> obtain all necessary permissions and consents which may be required before the commencement of the services; and</div>
                  <div><b>7.1.4</b> comply with such other requirements as may be set out in the Statement of Work or otherwise agreed between the parties.</div>
                </div>
              </div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>7.2</b> The Customer shall be liable to compensate the Supplier for any expenses incurred by the Supplier as a result of the Customer's failure to comply with Clause 7.1.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>7.3</b> Without prejudice to any other rights to which the Supplier may be entitled, in the event that the Customer cancels or terminates the services and/or Deliverables set out in the Statement of Work other than in accordance with clause 12, the Customer shall pay to the Supplier:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>7.3.1</b> all fees and charges properly incurred for work performed up to the effective date of cancellation;</div>
                  <div><b>7.3.2</b> the full amount of any non-refundable or non-cancellable third-party costs and commitments to which the Supplier has irrevocably committed in connection with the Statement of Work; and</div>
                  <div><b>7.3.3</b> a cancellation fee calculated as a percentage of the remaining fees that would have been payable under the Statement of Work, as follows:</div>
                  <div className="ml-4 mt-2 flex flex-col gap-1">
                    <div><b>i.</b> where written notice of cancellation is given more than 20 Business Days before the next scheduled milestone or delivery date: 0% of the remaining fees;</div>
                    <div><b>ii.</b> where written notice of cancellation is given between 10 and 20 Business Days before the next scheduled milestone or delivery date: 25% of the remaining fees; and</div>
                    <div><b>iii.</b> where written notice of cancellation is given less than 10 Business Days before the next scheduled milestone or delivery date: 50% of the remaining fees.</div>
                  </div>
                </div>
              </div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>7.3.4</b> The parties agree that the sums payable under this clause 7.3 represent a genuine pre-estimate of the Supplier’s likely loss and are not a penalty.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>7.3.5</b> For the avoidance of doubt, where the Customer commits a material breach of its obligations under clause 7.1 which prevents the Supplier from performing the services and fails to remedy such breach within 5 working days of receiving written notice from the Supplier, the Supplier shall be entitled to treat this as a cancellation by the Customer for the purposes of this clause 7.3.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>7.4</b> In the event that the Customer or any third party, not being a sub-contractor of the Supplier, shall omit or commit anything which prevents or delays the Supplier from undertaking or complying with any of its obligations under this Agreement, then the Supplier shall notify the Customer as soon as possible and:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>7.4.1</b> the Supplier shall have no liability in respect of any delay to the completion of any project;</div>
                  <div><b>7.4.2</b> if applicable, the timetable for the project will be modified accordingly;</div>
                  <div><b>7.4.3</b> the Supplier shall notify the Customer at the same time if it intends to make any claim for additional costs.</div>
                </div>
              </div>
            </div>
          </section>
          {/* 8. ALTERATIONS TO THE STATEMENT OF WORK */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">8. ALTERATIONS TO THE Statement of Work</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>8.1</b> The parties may at any time mutually agree upon and execute new or amended Statement of Works. Any alterations in the scope of the services or Deliverables (including, without limitation, any changes to software, games, applications or consultancy services) shall be set out in a revised Statement of Work or written change request (“Change Request”). No Change Request shall be binding unless and until it has been confirmed in writing by both parties.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>8.2</b> The Customer may at any time request alterations to the Statement of Work by notice in writing to the Supplier. On receipt of such a request, the Supplier shall, within 5 Business Days or such other period as may be agreed between the parties, advise the Customer in writing of the effect of the proposed alterations, including any change to:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>8.2.1</b> the fees; and</div>
                  <div><b>8.2.2</b> the delivery dates, milestones or timetable.</div>
                </div>
              </div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>8.3</b> Where the Supplier confirms in writing that it is willing to implement the requested alterations, the Customer shall, within 5 Business Days of receipt of such confirmation or such other period as may be agreed, notify the Supplier in writing whether it wishes the alterations to proceed.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>8.4</b> Once the parties have confirmed the Change Request in writing in accordance with this clause 8, the relevant Statement of Work shall be deemed amended accordingly and the Supplier shall perform this Agreement on the basis of the amended scope, fees and delivery dates.</div>
            </div>
          </section>

          {/* 9. WARRANTY */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">9. WARRANTY</h3>
            <div className="flex flex-col gap-3 my-2">
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>9.1</b> Limited Warranty: The Supplier warrants that, for a period of one month from the date of delivery (the "Warranty Period"), the Software will function in material conformity with the functionality described in the Statement of Work.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>9.2</b> Exclusions: The warranty in clause 9.1 does not apply to, and the Supplier shall not be liable for, defects or errors resulting from:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>9.2.1</b> updates, upgrades or patches to third-party operating systems, firmware, web browsers or platforms (including, without limitation, iOS, Android, Windows, macOS, Chrome) released after delivery;</div>
                  <div><b>9.2.2</b> changes to third-party APIs, SDKs or services (including, without limitation, app stores, analytics tools, or social login services) relied upon by the Software; or</div>
                  <div><b>9.2.3</b> any modifications to the Software made by any person other than the Supplier, or use of the Software other than in accordance with the Statement of Work or any documentation supplied by the Supplier.</div>
                </div>
              </div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>9.3</b> The Supplier warrants that the services performed under this Agreement shall be performed using reasonable skill and care and in accordance with generally accepted industry standards and practices.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                <b>9.4</b> Remedy: The Supplier’s sole obligation and the Customer’s exclusive remedy for any breach of the warranty in clause 9.1 shall be, at the Supplier’s option, to:
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <div><b>9.4.1</b> use reasonable efforts to correct the non-conformity; or</div>
                  <div><b>9.4.2</b> provide a reasonable workaround; or</div>
                  <div><b>9.4.3</b> where the non-conformity cannot reasonably be remedied, refund the charges paid by the Customer for the part of the Software that is materially affected.</div>
                </div>
              </div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>9.5</b> The Customer must notify the Supplier in writing of any alleged breach of the warranty in clause 9.1 within the Warranty Period. If the Customer fails to do so, the Supplier shall have no obligation to remedy such breach under clause 9.4.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>9.6</b> Following expiry of the Warranty Period, any support, maintenance, bug fixes, updates or modifications to the Software shall be provided only under a separate support or maintenance agreement (if any) or, in the absence of such an agreement, shall be chargeable at the Supplier’s then current rates.</div>
              <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>9.7</b> Except as expressly stated in this Agreement, all warranties, conditions and other terms, whether express or implied, by statute, common law or otherwise, are excluded to the fullest extent permitted by law in relation to the Software, Deliverables and services provided by the Supplier.</div>
            </div>
          </section>
            {/* 10. INDEMNIFICATION */}
            <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">10. INDEMNIFICATION</h3>
            <p>The Customer shall indemnify the Supplier against all claims, costs and expenses which the Supplier may incur and which arise, directly or indirectly, from the Customer's breach of any of its obligations under this Agreement, including any claims brought against the Supplier alleging that any services and/or Deliverables provided by the Supplier in accordance with the Statement of Work infringe a patent, copyright or trade secret or other similar right of a third party.</p>
            </section>

            {/* 11. LIMITATION OF LIABILITY */}
            <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">11. LIMITATION OF LIABILITY</h3>
            <div className="flex flex-col gap-3 my-2">
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>11.1</b> Except in respect of death or personal injury due to negligence for which no limit applies, the entire liability of the Supplier to the Customer in respect of any claim whatsoever or breach of this Agreement, whether or not arising out of negligence, shall be limited to an amount equal to the total charges paid by the Customer to the Supplier under the Statement of Work giving rise to the claim in the 12-month period immediately preceding the date on which the cause of action arose.</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>11.2</b> In no event shall the Supplier be liable to the Customer for any loss of business, loss of opportunity or loss of profits or for any other indirect or consequential loss or damage whatsoever. This shall apply even where such a loss was reasonably foreseeable or the Supplier had been made aware of the possibility of the Customer incurring such a loss.</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>11.3</b> Nothing in these Terms and Conditions shall exclude or limit the Supplier's liability for death or personal injury resulting from the Supplier's negligence or that of its employees, agents or sub-contractors.</div>
            </div>
            </section>

            {/* 12. TERMINATION */}
            <section>
            <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">12. TERMINATION</h3>
            <p>Either party may terminate this Agreement forthwith by notice in writing to the other if:</p>
            <div className="flex flex-col gap-3 my-2">
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>12.1</b> the other party commits a material breach of this Agreement and, in the case of a breach capable of being remedied, fails to remedy it within 30 calendar days of being given written notice from the other party to do so;</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>12.2</b> the other party commits a material breach of this Agreement which cannot be remedied under any circumstances;</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>12.3</b> the other party passes a resolution for winding up (other than for the purpose of solvent amalgamation or reconstruction), or a court of competent jurisdiction makes an order to that effect;</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>12.4</b> the other party ceases to carry on its business or substantially the whole of its business; or</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>12.5</b> the other party is declared insolvent, or convenes a meeting of or makes or proposes to make any arrangement or composition with its creditors; or a liquidator, receiver, administrative receiver, manager, trustee or similar officer is appointed over any of its assets.</div>
            </div>
            </section>

            {/* 13. INTELLECTUAL PROPERTY RIGHTS */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">13. INTELLECTUAL PROPERTY RIGHTS</h3>
              <div className="flex flex-col gap-3 my-2">
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>13.1</b>  In this Agreement:
                  <div className="ml-4 mt-2 flex flex-col gap-1">
                    <div><b>(a)</b> "Supplier Background IPR" means all Intellectual Property Rights owned by or licensed to the Supplier prior to the Effective Date of this Agreement or developed independently of this Agreement, including without limitation any tools, engines, frameworks, libraries,  templates, design systems, processes and know-how;</div>
                    <div><b>(b)</b> "Customer Materials" means all materials, content, data, brand assets, trademarks, logos, text, images, audio, video and other information supplied by or on behalf of the Customer to the Supplier for the purposes of this Agreement; and</div>
                    <div><b>(c)</b> "Deliverables IPR" means all Intellectual Property Rights in the Deliverables (excluding any Supplier Background IPR and any Customer Materials).</div>
                  </div>
                </div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>13.2</b> Subject to any express provision in a Statement of Work that certain Deliverables IPR shall be owned by the Customer, as between the parties all Supplier Background IPR and Deliverables IPR shall be owned by the Supplier. To the extent that any Deliverables IPR that is to be owned by the Supplier does not automatically vest in the Supplier by operation of law, the Customer hereby assigns, and shall procure that its employees, contractors and agents assign, all such rights to the Supplier with full title guarantee, and shall do all things reasonably necessary to give effect to such assignment.
                </div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>13.3</b> As between the parties, all Intellectual Property Rights in the Customer Materials shall remain the property of the Customer. The Customer grants to the Supplier a non-exclusive, worldwide, royalty-free licence to use, copy, modify and adapt the Customer Materials solely for the purposes of performing this Agreement and creating the Deliverables.
                </div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>13.4</b> The Customer shall ensure that it has obtained all rights, licences and consents necessary for the Supplier to use the Customer Materials in accordance with clause 13.3 and shall indemnify the Supplier against any claims by third parties arising from the Supplier’s authorised use of the Customer Materials.
                </div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>13.5</b> Nothing in this Agreement shall prevent the Supplier from using any general ideas, concepts, know-how or techniques acquired or used in the course of providing the services, provided that the Supplier does not use the Customer’s Confidential Information or Customer Materials in doing so.
                </div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>13.6</b> The Customer’s rights to use the Deliverables IPR are limited to the licence granted in clause 6 and subject always to the terms of this Agreement.
                </div>
              </div>
            </section>

            {/* 14. CUSTOMER HARDWARE AND ASSETS */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">14. CUSTOMER HARDWARE AND ASSETS</h3>
              <div className="flex flex-col gap-3 my-2">
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>14.1</b> The Customer shall supply to the Supplier, on or before the dates specified in the Statement of Work, all hardware and all assets required for the development and/or final outcome of the project, including (without limitation) images, video, audio, copy, data, and any other files, designs, materials or descriptions that constitute Customer Materials.</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>14.2</b> If the Customer fails to supply the required hardware or Customer Materials by the dates specified in the Statement of Work, the Supplier shall not be liable for any delay in, or late completion of, the project to the extent such delay is caused by that failure. The Supplier shall be entitled to a reasonable extension of any affected deadlines.</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>14.3</b> The Customer warrants that it owns or has obtained all necessary rights, licences and permissions in respect of the Customer Materials and any hardware it supplies, and grants the Supplier a non-exclusive licence to use such Customer Materials and hardware solely for the purposes of performing this Agreement and delivering the Deliverables.</div>
              </div>
            </section>

            {/* 15. FORCE MAJEURE */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">15. FORCE MAJEURE</h3>
              <p>Neither party shall be liable for any delay or failure to perform any of its obligations if the delay or failure results from events or circumstances outside its reasonable control, including but not limited to acts of God, strikes, lock outs, accidents, war, fire, the act or omission of government, highway authorities or any telecommunications carrier, operator or administration or other competent authority, or the delay or failure in manufacture, production, or supply by third parties of equipment or services, and the party shall be entitled to a reasonable extension of its obligations after notifying the other party of the nature and extent of such events.</p>
            </section>

            {/* 16. INDEPENDENT CONTRACTORS */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">16. INDEPENDENT CONTRACTORS</h3>
              <p>The Supplier and the Customer are contractors independent of each other, and neither has the authority to bind the other to any third party or act in any way as the representative of the other, unless otherwise expressly agreed to in writing by both parties. The Supplier may, in addition to its own employees, engage sub-contractors to provide all or part of the services being provided to the Customer and such engagement shall not relieve the Supplier of its obligations under this Agreement or any applicable Statement of Work.</p>
            </section>

            {/* 17. ASSIGNMENT */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">17. ASSIGNMENT</h3>
              <div className="flex flex-col gap-3 my-2">
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>17.1</b> The Customer shall not assign, transfer or delegate any of its rights or obligations under this Agreement (including the licence granted in clause 6) without the prior written consent of the Supplier.</div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2">
                  <b>17.2</b> Notwithstanding clause 17.1, the Customer may assign its rights under this Agreement (including the licence granted in clause 6) to a third party that acquires all or substantially all of the Customer’s business or assets to which the Deliverables relate, provided that:
                  <div className="ml-4 mt-2 flex flex-col gap-1">
                    <div><b>17.2.1</b> the Customer gives the Supplier written notice of the assignment as soon as reasonably practicable; and</div>
                    <div><b>17.2.2</b> the assignee agrees in writing to be bound by the terms of this Agreement in place of the Customer.</div>
                  </div>
                </div>
                <div className="pl-3 border-l-4 border-accent bg-surface/60 rounded py-2"><b>17.3</b> The Supplier may assign or transfer its rights and obligations under this Agreement to any member of its group or in connection with any merger, acquisition or sale of all or part of its business, provided it notifies the Customer.</div>
              </div>
            </section>

            {/* 18. SEVERABILITY */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">18. SEVERABILITY</h3>
              <p>If any provision of this Agreement is held invalid, illegal or unenforceable for any reason by any Court of competent jurisdiction such provision shall be severed and the remainder of the provisions herein shall continue in full force and effect as if this Agreement had been agreed with the invalid illegal or unenforceable provision eliminated.</p>
            </section>

            {/* 19. WAIVER */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">19. WAIVER</h3>
              <p>The failure by either party to enforce at any time or for any period any one or more of the Terms and Conditions herein shall not be a waiver of them or of the right at any time subsequently to enforce all Terms and Conditions of this Agreement.</p>
            </section>

            {/* 20. NOTICES */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">20. NOTICES</h3>
              <p>Any notice to be given by either party to the other may be served by email, fax, personal service or by post to the address of the other party given in the Statement of Work or such other address as such party may from time to time have communicated to the other in writing, and if sent by email shall unless the contrary is proved be deemed to be received on the day it was sent, if sent by fax shall be deemed to be served on receipt of an error free transmission report, if given by letter shall be deemed to have been served at the time at which the letter was delivered personally or if sent by post shall be deemed to have been delivered in the ordinary course of post.</p>
            </section>

            {/* 21. ENTIRE AGREEMENT */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">21. ENTIRE AGREEMENT</h3>
              <p>This Agreement contains the entire agreement between the parties relating to the subject matter and supersedes any previous agreements, arrangements, undertakings or proposals, oral or written. Unless expressly provided elsewhere in this Agreement, this Agreement may be varied only by a document signed by both parties.</p>
            </section>

            {/* 22. NO THIRD PARTIES */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">22. NO THIRD PARTIES</h3>
              <p>Nothing in this Agreement is intended to, nor shall it confer any rights on a third party.</p>
            </section>

            {/* 23. GOVERNING LAW AND JURISDICTION */}
            <section>
              <h3 className="text-xl font-bold text-dark mb-2 pb-1 border-b-2 border-accent">23. GOVERNING LAW AND JURISDICTION</h3>
              <p>This Agreement shall be governed by and construed in accordance with the law of England and Wales and the parties hereby submit to the exclusive jurisdiction of the English and Welsh courts.</p>
            </section>
        </div>
      </div>
    </div>
  );
}
