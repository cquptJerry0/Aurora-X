// 类型定义
export interface AttachmentItem {
  uid: string
  name: string
  url?: string
  description?: string
  [key: string]: any
}

export interface AttachmentsProps {
  items?: AttachmentItem[]
  overflow?: 'scrollX' | 'scrollY' | 'wrap'
  listStyle?: Record<string, string>
  limit?: number
  hideUpload?: boolean
  dragTarget?: string | HTMLElement | null
}
