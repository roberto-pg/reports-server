export type Report = {
  id?: string
  user_id: string
  initial_description?: string
  initial_image?: string
  started_at?: Date
  final_description?: string
  final_image?: string
  stoped_at?: Date
  finished?: boolean
}
