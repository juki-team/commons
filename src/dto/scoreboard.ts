export interface ScoreboardResponseDTO {
  userNickname: string,
  userFamilyName: string,
  userGivenName: string,
  userImageUrl: string,
  totalPenalty: number,
  totalPoints: number,
  position: number,
  problems: {
    attempts: number,
    points: number,
    success: boolean,
    penalty: number,
  }[],
}
