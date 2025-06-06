export interface CreateContactInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface Contact extends CreateContactInput {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  contact: Contact | null;
} 