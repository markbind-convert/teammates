import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxLoadingModule } from '../ajax-loading/ajax-loading.module';
import { AjaxPreloadModule } from '../ajax-preload/ajax-preload.module';
import { CopySessionModalModule } from '../copy-session-modal/copy-session-modal.module';
import { TeammatesCommonModule } from '../teammates-common/teammates-common.module';
import {
  ConfirmPublishingSessionModalComponent,
} from './confirm-publishing-session-modal/confirm-publishing-session-modal.component';
import {
  ConfirmSessionMoveToRecycleBinModalComponent,
} from './confirm-session-move-to-recycle-bin-modal/confirm-session-move-to-recycle-bin-modal.component';
import {
  ConfirmUnpublishingSessionModalComponent,
} from './confirm-unpublishing-session-modal/confirm-unpublishing-session-modal.component';
import { FormatDateBriefPipe } from './format-date-brief.pipe';
import { PublishStatusTooltipPipe } from './publish-status-tooltip.pipe';
import {
  ResendResultsLinkToStudentModalComponent,
} from './resend-results-link-to-student-modal/resend-results-link-to-student-modal.component';
import {
  SendRemindersToStudentModalComponent,
} from './send-reminders-to-student-modal/send-reminders-to-student-modal.component';
import { SessionsTableComponent } from './sessions-table.component';
import { SubmissionStatusTooltipPipe } from './submission-status-tooltip.pipe';

/**
 * Module for sessions table.
 */
@NgModule({
  declarations: [
    SubmissionStatusTooltipPipe,
    PublishStatusTooltipPipe,
    SessionsTableComponent,
    ConfirmUnpublishingSessionModalComponent,
    ConfirmPublishingSessionModalComponent,
    ResendResultsLinkToStudentModalComponent,
    SendRemindersToStudentModalComponent,
    FormatDateBriefPipe,
    ConfirmSessionMoveToRecycleBinModalComponent,
  ],
  imports: [
    CommonModule,
    AjaxLoadingModule,
    AjaxPreloadModule,
    TeammatesCommonModule,
    NgbModule,
    FormsModule,
    CopySessionModalModule,
  ],
  entryComponents: [
    ConfirmSessionMoveToRecycleBinModalComponent,
    ConfirmUnpublishingSessionModalComponent,
    ConfirmPublishingSessionModalComponent,
    ResendResultsLinkToStudentModalComponent,
    SendRemindersToStudentModalComponent,
  ],
  exports: [
    SessionsTableComponent,
  ],
})
export class SessionsTableModule { }
