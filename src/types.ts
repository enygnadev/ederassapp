export type UserRole = 'client' | 'admin' | 'employee';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt?: any;
}

export interface ServiceProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'insurance' | 'license' | 'bureaucracy';
  requiredDocuments: string[];
  image: string;
}
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'insurance' | 'license' | 'bureaucracy';
  requiredDocuments: string[];
  requiredFiles?: string[]; // Arquivos necessários (ex: ['PDF', 'JPG', 'PNG'])
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem extends ServiceProduct {
  cartId: string;
  uploadedDocs: Record<string, File | null>;
}

export interface DocumentMetadata {
  url: string;
  fullName: string;
  uploadedAt: string;
  fileName: string;
}

export interface OrderItem extends ServiceProduct {
  cartId: string;
  uploadedDocs: Record<string, string | DocumentMetadata>;
  requiredFiles?: string[]; // Tipos de arquivo aceitos
}

export interface Order {
  id: string;
  userId: string;
  userName?: string;
  items: OrderItem[];
  total: number;
  status: 'pending_docs' | 'pending_payment' | 'processing' | 'paid' | 'completed' | 'rejected' | 'failed';
  date: string;
  payment?: {
    method?: 'pix' | 'whatsapp' | 'card' | 'manual';
    status?: 'pending_payment' | 'paid' | 'failed' | 'refunded';
    pixKey?: string;
    pixPayload?: string;
    whatsappMessage?: string;
    createdAt?: string;
    paidAt?: string;
    transactionId?: string;
  };
}

// Layout Editor Types
export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export type LayerType = 'text' | 'shape' | 'image' | 'button';

export interface Layer {
  id: string;
  type: LayerType;
  label: string;
  visible: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  zIndex: number;
  // Text properties
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontColor?: RGBColor;
  fontWeight?: 'normal' | 'bold' | '600' | '700';
  textAlign?: 'left' | 'center' | 'right';
  // Background
  backgroundColor?: RGBColor;
  borderColor?: RGBColor;
  borderWidth?: number;
  borderRadius?: number;
  // Image
  imageUrl?: string;
}

export interface LayoutEditConfig {
  id: string;
  name: string;
  description: string;
  canvasWidth: number;
  canvasHeight: number;
  backgroundColor: RGBColor;
  layers: Layer[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}