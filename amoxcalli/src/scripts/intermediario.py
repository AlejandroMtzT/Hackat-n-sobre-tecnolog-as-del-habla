from usar_modelos import *

def obtener_transcript_spanish(name):
	path = '../../../../../Downloads' + name
	text = speech_text_spanish(path)
	return text

def obtener_transcript_nahuatl(name):
	path = '../../../../../Downloads' + name
	text = speech_text_nahuatl(path)
	return text

