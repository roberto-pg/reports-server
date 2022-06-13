export type Report = {
  id?: string
  user_id: string
  initial_description: string
  initial_image: string
  started_at: Date
  final_description: string | null
  final_image: string | null
  stoped_at: Date | null
  finished: boolean | null
}
