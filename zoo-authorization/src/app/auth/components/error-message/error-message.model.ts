export enum EZooErrorMessages {
    REQUIRED = 'required',
}

export const ZOO_ERROR_MESSAGES = new Map<EZooErrorMessages, string>([
	[EZooErrorMessages.REQUIRED, 'This field is required'],
]);
