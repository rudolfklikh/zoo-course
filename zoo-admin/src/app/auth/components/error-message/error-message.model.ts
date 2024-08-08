export enum EZooErrorMessages {
    REQUIRED = 'required',
    EMAIL = 'email',
}

export const ZOO_ERROR_MESSAGES = new Map<EZooErrorMessages, string>([
	[EZooErrorMessages.REQUIRED, 'This field is required'],
    [EZooErrorMessages.EMAIL, 'Its not an email'],
]);
