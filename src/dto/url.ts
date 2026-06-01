export interface ShortenedUrlListResponseDto {
  slug: string;
  url: string;
  createdAt: number;
  expiresAt: number;
  views: number;
  lastAccessAt: number;
}
