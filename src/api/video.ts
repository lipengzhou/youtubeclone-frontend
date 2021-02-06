import { request } from '@/utils/request'

interface CreateVideoInput {
  title: string
  description: string
  vodVideoId: string
}

interface Video {
  _id: string
  title: string
  description: string
  vodVideoId: string
}

interface CreateVideoPayload {
  video: Video
}

export const createVideo = (data: CreateVideoInput) => {
  return request.post<CreateVideoPayload>('/api/v1/videos', data)
}
