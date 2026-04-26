export const FilesJukiPub = {
  SHARED: 'shared', // files to share
  SHARED_EXCALIDRAW: 'shared/E', // `shared/${CollectionKey.EXCALIDRAW}`,
  TEMP: 'temp', // temporal files
  PROBLEMS: 'problems',
  CONTESTS: 'contests',
} as const;

export type FilesJukiPub = (typeof FilesJukiPub)[keyof typeof FilesJukiPub];
