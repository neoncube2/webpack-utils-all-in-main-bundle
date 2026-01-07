export function getNumEntriesToLearn(user) {
	return user.testsNumWordsToLearn ?? 5;
}
export function getDisplayLanguage(user) {
	return user?.displayLanguage ?? 4;
}