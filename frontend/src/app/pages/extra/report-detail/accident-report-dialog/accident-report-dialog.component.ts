import { Component } from '@angular/core';

const API_RESPONSES = [
  {
    title: 'Claim Submitted',
    message:
      ' The claim has been successfully submitted to the insurance company.',
  },
  {
    title: 'Claim Under Review',
    message: ' The insurance company is currently reviewing the claim.',
  },
  {
    title: 'Additional Information Required',
    message:
      ' The insurance company needs more information to process the claim.',
  },
  {
    title: 'Claim Approved',
    message:
      ' The claim has been approved and is ready for payout or further processing.',
  },
  {
    title: 'Claim Denied',
    message:
      ' The claim has been denied due to reasons such as insufficient coverage, policy exclusion, or other factors.',
  },
  {
    title: 'Claim Payment Processed',
    message:
      ' The payment for the claim has been processed and funds are being transferred.',
  },
  {
    title: 'Claim in Processing',
    message: ' The claim is being processed for approval or payment.',
  },
  {
    title: 'Claim Pending Investigation',
    message:
      ' The claim is pending investigation by the insurance company or a third party.',
  },
  {
    title: 'Claim Closed',
    message:
      ' The claim process has been closed, either after resolution or due to a decision.',
  },
  {
    title: 'Claim Reopened',
    message:
      ' The previously closed claim has been reopened for further action.',
  },
  {
    title: 'Claim Escalated',
    message: ' The claim has been escalated to higher management for review.',
  },
  {
    title: 'Claim Settled',
    message: ' The claim has been successfully settled and the case is closed.',
  },
  {
    title: 'Fraud Investigation Initiated',
    message:
      ' The claim has been flagged for potential fraud and is under investigation.',
  },
  {
    title: 'Claim Document Verification',
    message: ' The submitted documents are being verified for authenticity.',
  },
  {
    title: 'Claim Rejected – Invalid Policy',
    message: ' The claim was rejected due to an invalid or expired policy.',
  },
  {
    title: 'Claim Rejected – Policy Limit Exceeded',
    message:
      ' The claim was rejected because the amount exceeded the policy coverage limit.',
  },
  {
    title: 'Claim Delayed',
    message:
      ' The claim processing has been delayed due to unforeseen circumstances.',
  },
  {
    title: 'Claim Approved – Awaiting Payment',
    message: ' The claim has been approved, and payment is pending.',
  },
  {
    title: 'Claim Awaiting Approval',
    message:
      ' The claim is awaiting final approval from management or an underwriter.',
  },
  {
    title: 'Claim Withdrawn by Claimant',
    message: ' The claimant has withdrawn the claim before processing.',
  },
];

@Component({
  selector: 'app-accident-report-dialog',
  standalone: true,
  imports: [],
  templateUrl: './accident-report-dialog.component.html',
  styleUrl: './accident-report-dialog.component.scss',
})
export class AccidentReportDialogComponent {
  getRandomApiResponse() {
    const randomIndex = Math.floor(Math.random() * API_RESPONSES.length);
    return API_RESPONSES[randomIndex];
  }
}
