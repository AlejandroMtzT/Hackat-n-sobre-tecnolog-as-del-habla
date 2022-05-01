# Requisito: pip install huggingsound

from huggingsound import SpeechRecognitionModel

model_spanish = SpeechRecognitionModel("patrickvonplaten/wav2vec2-large-xlsr-53-spanish-with-lm")
model_nahuatl = SpeechRecognitionModel("tyoc213/wav2vec2-large-xlsr-nahuatl")


# Función español para solo un audio

def speech_text_spanish(audio_paths):
  transcriptions = model_spanish.transcribe(audio_paths)
  text = transcriptions[0]['transcription']

  return text

# Función nahuatl para solo un audio

def speech_text_nahuatl(audio_paths):
  transcriptions = model_nahuatl.transcribe(audio_paths)
  text = transcriptions[0]['transcription']
  
  return text

# Funcion para Timestamp por palabra (usando elementos de transcript):

def timestamps_words(timestamps, text):
  if len(text) == 0:
    return []
  
  new_ts = []
  t1 = t2 = timestamps[0][0]
  s1 = s2 = 0
  length = len(timestamps)
  
  for i in range(length):
    if (text[i].isspace()):
      t2 = timestamps[i][1]
      s2 = i
      new_ts.append({'begin_index':s1, 'end_index':s2, 'begin_timestamp':t1, 'end_timestamp':t2})
      
      if (i+1 <  length):
        s1 = i+1
        t1 = timestamps[i+1][0]
      else:
        s1 = t1 = -1

  if (s1 != -1):
    s2 = length-1
    t2 = timestamps[length-1][1]
    new_ts.append({'begin_index':s1, 'end_index':s2, 'begin_timestamp':t1, 'end_timestamp':t2})

  return new_ts