import { PriorityType, StatusType } from './constants';

/** Note(s):
 * - Couldn't get the PriorityType and StatusType working as expected for selecting the existing value with Angular Material
 */

export interface IExistingSupportTicket {
  id: number;
  title: string;
  description: string;
  priority: PriorityType; // (selectable from a predefined list)
  status: StatusType;     // (selectable from a predefined list)
  email: string;
  lastUpdate: string;
}

export interface INewSupportTicket {
  id?: number;
  title: string;
  description: string;
  priority: number; // (selectable from a predefined list)
  status: number;     // (selectable from a predefined list)
  email: string;
}

export interface TicketError {
  message: string;
  ticket?: Partial<IExistingSupportTicket>;
  error: any; // Error object returned from API calls, etc.
}