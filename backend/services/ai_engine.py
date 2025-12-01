import random

def process_audio(filename: str):
    """
    Simulates processing audio with AI4Bharat models.
    Returns mock transcription and feedback.
    """
    # Mock responses
    transcriptions = [
        "Namaste, mera naam Arjun hai.",
        "Main Hindi seekh raha hoon.",
        "Bharat ek vishal desh hai.",
    ]
    
    feedbacks = [
        "Excellent pronunciation! Your 'r' sound is perfect.",
        "Good effort! Try to stress the second syllable more.",
        "Very clear. Keep practicing the flow.",
    ]
    
    return {
        "transcription": random.choice(transcriptions),
        "feedback": random.choice(feedbacks),
        "score": random.randint(70, 100)
    }
