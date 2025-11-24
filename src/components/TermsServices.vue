<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from './Navigation.vue'
import FooterSection from './FooterSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="legal-page">
    <Navigation />
    <main class="legal-main">
      <div class="container">
        <div class="legal-content">
          <h1>Terms and Conditions</h1>
          <h2 class="subtitle">For the supply of goods and services of Untether Ltd.</h2>
          <div class="last-updated">Last updated: January 2025</div>
          
          <div class="content-section">
            <section>
              <h3>1. DEFINITIONS</h3>
              <p>In this document the following words shall have the following meanings:</p>
              <div class="definition-list">
                <div class="definition-item">
                  <strong>1.1</strong> "Agreement" means these Terms and Conditions together with the terms of any applicable Specification Document;
                </div>
                <div class="definition-item">
                  <strong>1.2</strong> "Customer" means the organisation or person who purchases goods and services from the Supplier;
                </div>
                <div class="definition-item">
                  <strong>1.3</strong> "Intellectual Property Rights" means all information including without limitation, information relating to the research, development, business plans, marketing, operations, finances, personal data of any such entity, all patents, registered and unregistered designs, copyright, trade marks, know-how and all other forms of intellectual property wherever in the world enforceable which is disclosed directly or indirectly whether in writing (physically or electronically), visually or orally and which is designated as proprietary or confidential or which, under the circumstances, should reasonably be considered confidential.
                </div>
                <div class="definition-item">
                  <strong>1.4</strong> "Specification Document" means a statement of work, quotation or other similar document describing the goods and services to be provided by the Supplier.
                </div>
                <div class="definition-item">
                  <strong>1.5</strong> "Statutory Interest" means statutory interest as defined in the Late Payment of Commercial Debts (Interest) Act 1998 as amended & supplemented by the Late Payment of Commercial Debts Regulations 2002.
                </div>
                <div class="definition-item">
                  <strong>1.6</strong> "Supplier" means Untether Ltd, 61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United Kingdom.
                </div>
              </div>
            </section>

            <section>
              <h3>2. GENERAL</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>2.1</strong> These Terms and Conditions shall apply to all contracts for the supply of goods and services by the Supplier to the Customer.
                </div>
                <div class="clause-item">
                  <strong>2.2</strong> Before the commencement of the services the Supplier shall submit to the Customer a Specification Document which shall specify the goods and services to be supplied and the price payable. The Customer shall notify the Supplier immediately if the Customer does not agree with the contents of the Specification Document. All Specification Documents shall be subject to these Terms and Conditions.
                </div>
                <div class="clause-item">
                  <strong>2.3</strong> The Supplier shall use all reasonable endeavours to complete the services within estimated time frames but time shall not be of the essence in the performance of any services.
                </div>
              </div>
            </section>

            <section>
              <h3>3. PRICE AND PAYMENT</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>3.1</strong> The price for the supply of goods and services are set out in the Specification Document. The Supplier shall invoice the Customer before the beginning of the Project. The Customer shall pay 50% of the full invoice before the Project begins. The Customer shall pay the remaining 50% on completion of the Project within a 30 day period, unless agreed in writing otherwise.
                </div>
                <div class="clause-item">
                  <strong>3.2</strong> The customer shall have five working days to dispute the invoice. After such period of time the invoice will be considered accepted by both parties and cannot be amended unless agreed in writing by the Supplier.
                </div>
                <div class="clause-item">
                  <strong>3.3</strong> The Supplier shall be entitled to charge Statutory Interest on overdue invoices from the date when payment becomes due until payment is made. In the event that the Customer's procedures require that an invoice be submitted against a purchase order to payment, the Customer shall be responsible for issuing such purchase order before the goods and services are supplied.
                </div>
              </div>
            </section>

            <section>
              <h3>4. SPECIFICATION OF THE GOODS</h3>
              <p>All goods shall be required only to conform to the specification in the Specification Document. For the avoidance of doubt no description, specification or illustration contained in any product pamphlet or other sales or marketing literature of the Supplier and no representation written or oral, correspondence or statement shall form part of the contract.</p>
            </section>

            <section>
              <h3>5. DELIVERY</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>5.1</strong> The date of delivery specified by the Supplier is an estimate only. Time for delivery shall not be of the essence of the contract and the Supplier shall not be liable for any loss, costs, damages, charges or expenses caused directly or indirectly by any delay in the delivery of the goods.
                </div>
                <div class="clause-item">
                  <strong>5.2</strong> All risk in the goods shall pass to the Customer upon delivery.
                </div>
              </div>
            </section>

            <section>
              <h3>6. TITLE</h3>
              <p>Title in the Goods shall not pass to the Customer until the Supplier has been paid in full for the Goods.</p>
            </section>

            <section>
              <h3>7. CUSTOMER'S OBLIGATIONS</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>7.1</strong> To enable the Supplier to perform its obligations under this Agreement the Customer shall:
                  <div class="sub-clause-list">
                    <div class="sub-clause-item"><strong>7.1.1</strong> co-operate with the Supplier;</div>
                    <div class="sub-clause-item"><strong>7.1.2</strong> provide the Supplier with any information reasonably required by the Supplier;</div>
                    <div class="sub-clause-item"><strong>7.1.3</strong> obtain all necessary permissions and consents which may be required before the commencement of the services; and</div>
                    <div class="sub-clause-item"><strong>7.1.4</strong> comply with such other requirements as may be set out in the Specification Document or otherwise agreed between the parties.</div>
                  </div>
                </div>
                <div class="clause-item">
                  <strong>7.2</strong> The Customer shall be liable to compensate the Supplier for any expenses incurred by the Supplier as a result of the Customer's failure to comply with Clause 7.1.
                </div>
                <div class="clause-item">
                  <strong>7.3</strong> Without prejudice to any other rights to which the Supplier may be entitled, in the event that the Customer unlawfully terminates or cancels the goods and services agreed to in the Specification Document, the Customer shall be required to pay to the Supplier as agreed damages and not as a penalty the full amount of any third party costs to which the Supplier has committed and in respect of cancellations on less than 10 working days' written notice the full amount of the goods and services contracted for as set out in the Specification Document, and the Customer agrees this is a genuine pre-estimate of the Supplier's losses in such a case. For the avoidance of doubt, the Customer's failure to comply with any obligations under Clause 7.1 shall be deemed to be a cancellation of the goods and services and subject to the payment of the damages set out in this Clause.
                </div>
                <div class="clause-item">
                  <strong>7.4</strong> In the event that the Customer or any third party, not being a sub-contractor of the Supplier, shall omit or commit anything which prevents or delays the Supplier from undertaking or complying with any of its obligations under this Agreement, then the Supplier shall notify the Customer as soon as possible and:
                  <div class="sub-clause-list">
                    <div class="sub-clause-item"><strong>7.4.1</strong> the Supplier shall have no liability in respect of any delay to the completion of any project;</div>
                    <div class="sub-clause-item"><strong>7.4.2</strong> if applicable, the timetable for the project will be modified accordingly;</div>
                    <div class="sub-clause-item"><strong>7.4.3</strong> the Supplier shall notify the Customer at the same time if it intends to make any claim for additional costs.</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3>8. ALTERATIONS TO THE SPECIFICATION DOCUMENT</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>8.1</strong> The parties may at any time mutually agree upon and execute new Specification Documents. Any alterations in the scope of goods and/or services to be provided under this Agreement shall be set out in the Specification Document, which shall reflect the changed goods and/or services and price and any other terms agreed between the parties.
                </div>
                <div class="clause-item">
                  <strong>8.2</strong> The Customer may at any time request alterations to the Specification Document by notice in writing to the Supplier. On receipt of the request for alterations the Supplier shall, within 10 working days or such other period as may be agreed between the parties, advise the Customer by notice in writing of the effect of such alterations, if any, on the price and any other terms already agreed between the parties.
                </div>
                <div class="clause-item">
                  <strong>8.3</strong> Where the Supplier gives written notice to the Customer agreeing to perform any alterations on terms different to those already agreed between the parties, the Customer shall, within 10 working days of receipt of such notice or such other period as may be agreed between the parties, advise the Supplier by notice in writing whether or not it wishes the alterations to proceed.
                </div>
                <div class="clause-item">
                  <strong>8.4</strong> Where the Supplier gives written notice to the Customer agreeing to perform alterations on terms different to those already agreed between the parties, and the Customer confirms in writing that it wishes the alterations to proceed on those terms, the Specification Document shall be amended to reflect such alterations and thereafter the Supplier shall perform this Agreement upon the basis of such amended terms.
                </div>
              </div>
            </section>

            <section>
              <h3>9. WARRANTY</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>9.1</strong> Limited Warranty: The Supplier warrants that, for a period of one month from the date of delivery ("Warranty Period"), the Software will function in material conformity with the functionality described in the Scope of Work/Specification.
                </div>
                   <div class="clause-item">
                  <strong>9.2</strong> Exclusions: The warranty in Clause 9.1 does not apply to, and the Supplier shall not be liable for, defects or errors resulting from:
    
              <div class="sub-clause-list">
                    <div class="sub-clause-item"><strong>9.2.1</strong> Updates, upgrades, or patches to third-party operating systems, firmware, or web browsers (e.g., iOS, Android, Chrome) released after delivery;</div>
                    <div class="sub-clause-item"><strong>9.2.2</strong> Changes to third-party APIs or services (e.g., Google Maps, Facebook Login) relied upon by the Software;</div>
                    <div class="sub-clause-item"><strong>9.2.3</strong> Any modifications to the Software made by any party other than the Supplier.</div>
                  </div>
                </div>
                <div class="clause-item">
                  <strong>9.3</strong> The Supplier warrants that the services performed under this Agreement shall be performed using reasonable skill and care, and of a quality conforming to generally accepted industry standards and practices.
                </div>
                <div class="clause-item">
                  <strong>9.4</strong> Except as expressly stated in this Agreement, all warranties whether express or implied, by operation of law or otherwise, are hereby excluded in relation to the goods and services to be provided by the Supplier.
                </div>
              </div>
            </section>

            <section>
              <h3>10. INDEMNIFICATION</h3>
              <p>The Customer shall indemnify the Supplier against all claims, costs and expenses which the Supplier may incur and which arise, directly or indirectly, from the Customer's breach of any of its obligations under this Agreement, including any claims brought against the Supplier alleging that any goods and/or services provided by the Supplier in accordance with the Specification Document infringes a patent, copyright or trade secret or other similar right of a third party.</p>
            </section>

            <section>
              <h3>11. LIMITATION OF LIABILITY</h3>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>11.1</strong> Except in respect of death or personal injury due to negligence for which no limit applies, the entire liability of the Supplier to the Customer in respect of any claim whatsoever or breach of this Agreement, whether or not arising out of negligence, shall be limited to the price paid by the Customer to which the claim relates.
                </div>
                <div class="clause-item">
                  <strong>11.2</strong> In no event shall the Supplier be liable to the Customer for any loss of business, loss of opportunity or loss of profits or for any other indirect or consequential loss or damage whatsoever. This shall apply even where such a loss was reasonably foreseeable or the Supplier had been made aware of the possibility of the Customer incurring such a loss.
                </div>
                <div class="clause-item">
                  <strong>11.3</strong> Nothing in these Terms and Conditions shall exclude or limit the Supplier's liability for death or personal injury resulting from the Supplier's negligence or that of its employees, agents or sub-contractors.
                </div>
              </div>
            </section>

            <section>
              <h3>12. TERMINATION</h3>
              <p>Either party may terminate this Agreement forthwith by notice in writing to the other if:</p>
              <div class="clause-list">
                <div class="clause-item">
                  <strong>12.1</strong> the other party commits a material breach of this Agreement and, in the case of a breach capable of being remedied, fails to remedy it within 30 calendar days of being given written notice from the other party to do so;
                </div>
                <div class="clause-item">
                  <strong>12.2</strong> the other party commits a material breach of this Agreement which cannot be remedied under any circumstances;
                </div>
                <div class="clause-item">
                  <strong>12.3</strong> the other party passes a resolution for winding up (other than for the purpose of solvent amalgamation or reconstruction), or a court of competent jurisdiction makes an order to that effect;
                </div>
                <div class="clause-item">
                  <strong>12.4</strong> the other party ceases to carry on its business or substantially the whole of its business; or
                </div>
                <div class="clause-item">
                  <strong>12.5</strong> the other party is declared insolvent, or convenes a meeting of or makes or proposes to make any arrangement or composition with its creditors; or a liquidator, receiver, administrative receiver, manager, trustee or similar officer is appointed over any of its assets.
                </div>
              </div>
            </section>

            <section>
              <h3>13. INTELLECTUAL PROPERTY RIGHTS</h3>
              <p>All Intellectual Property Rights produced from or arising as a result of the performance of this Agreement shall, so far as not already vested, become the absolute property of the Supplier, and the Customer shall do all that is reasonably necessary to ensure that such rights vest in the Supplier by the execution of appropriate instruments or the making of agreements with third parties.</p>
            </section>

            <section>
              <h3>14. ASSETS</h3>
              <p>All hardware and all assets including image, video, audio, copy, and any other file, design or description required for the development and or final outcome of the project must be supplied on or before the date as set in the Specification Document. If the Customer does not supply hardware or assets as required by said date the Supplier will not be liable for any damages caused to the Customer as a result of the late completion of the project.</p>
            </section>

            <section>
              <h3>15. FORCE MAJEURE</h3>
              <p>Neither party shall be liable for any delay or failure to perform any of its obligations if the delay or failure results from events or circumstances outside its reasonable control, including but not limited to acts of God, strikes, lock outs, accidents, war, fire, the act or omission of government, highway authorities or any telecommunications carrier, operator or administration or other competent authority, or the delay or failure in manufacture, production, or supply by third parties of equipment or services, and the party shall be entitled to a reasonable extension of its obligations after notifying the other party of the nature and extent of such events.</p>
            </section>

            <section>
              <h3>16. INDEPENDENT CONTRACTORS</h3>
              <p>The Supplier and the Customer are contractors independent of each other, and neither has the authority to bind the other to any third party or act in any way as the representative of the other, unless otherwise expressly agreed to in writing by both parties. The Supplier may, in addition to its own employees, engage sub-contractors to provide all or part of the services being provided to the Customer and such engagement shall not relieve the Supplier of its obligations under this Agreement or any applicable Specification Document.</p>
            </section>

            <section>
              <h3>17. ASSIGNMENT</h3>
              <p>The Customer shall not be entitled to assign its rights or obligations or delegate its duties under this Agreement without the prior written consent of the Supplier.</p>
            </section>

            <section>
              <h3>18. SEVERABILITY</h3>
              <p>If any provision of this Agreement is held invalid, illegal or unenforceable for any reason by any Court of competent jurisdiction such provision shall be severed and the remainder of the provisions herein shall continue in full force and effect as if this Agreement had been agreed with the invalid illegal or unenforceable provision eliminated.</p>
            </section>

            <section>
              <h3>19. WAIVER</h3>
              <p>The failure by either party to enforce at any time or for any period any one or more of the Terms and Conditions herein shall not be a waiver of them or of the right at any time subsequently to enforce all Terms and Conditions of this Agreement.</p>
            </section>

            <section>
              <h3>20. NOTICES</h3>
              <p>Any notice to be given by either party to the other may be served by email, fax, personal service or by post to the address of the other party given in the Specification Document or such other address as such party may from time to time have communicated to the other in writing, and if sent by email shall unless the contrary is proved be deemed to be received on the day it was sent, if sent by fax shall be deemed to be served on receipt of an error free transmission report, if given by letter shall be deemed to have been served at the time at which the letter was delivered personally or if sent by post shall be deemed to have been delivered in the ordinary course of post.</p>
            </section>

            <section>
              <h3>21. ENTIRE AGREEMENT</h3>
              <p>This Agreement contains the entire agreement between the parties relating to the subject matter and supersedes any previous agreements, arrangements, undertakings or proposals, oral or written. Unless expressly provided elsewhere in this Agreement, this Agreement may be varied only by a document signed by both parties.</p>
            </section>

            <section>
              <h3>22. NO THIRD PARTIES</h3>
              <p>Nothing in this Agreement is intended to, nor shall it confer any rights on a third party.</p>
            </section>

            <section>
              <h3>23. GOVERNING LAW AND JURISDICTION</h3>
              <p>This Agreement shall be governed by and construed in accordance with the law of England and Wales and the parties hereby submit to the exclusive jurisdiction of the English and Welsh courts.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.legal-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.legal-main {
  flex: 1;
  padding: var(--spacing-2xl) 0;
  background-color: var(--background-secondary);
  margin-top: 70px; /* Account for fixed navigation */
}

.legal-content {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px var(--shadow);
}

.legal-content h1 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
  font-size: 2.5rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
}

.last-updated {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border);
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.content-section section {
  margin-bottom: var(--spacing-lg);
}

.content-section h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--primary-color);
}

.content-section p {
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
  color: var(--text-secondary);
}

.definition-list,
.clause-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.definition-item,
.clause-item {
  padding: var(--spacing-md);
  background-color: var(--background-secondary);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
  line-height: 1.6;
  color: var(--text-secondary);
}

.definition-item strong,
.clause-item strong {
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
}

.sub-clause-list {
  margin-top: var(--spacing-sm);
  padding-left: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.sub-clause-item {
  padding: var(--spacing-xs) 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.sub-clause-item strong {
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
}

@media (max-width: 768px) {
  .legal-content {
    padding: var(--spacing-lg);
    max-width: 100%;
  }
  
  .legal-main {
    margin-top: 60px;
  }
  
  .legal-content h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .content-section h3 {
    font-size: 1.2rem;
  }
  
  .definition-item,
  .clause-item {
    padding: var(--spacing-sm);
  }
  
  .sub-clause-list {
    padding-left: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .legal-content h1 {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .content-section h3 {
    font-size: 1.1rem;
  }
}
</style>