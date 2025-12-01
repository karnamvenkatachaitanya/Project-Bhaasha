import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, Loader2, X, Volume2, Award, ChevronRight, Star, RotateCcw } from 'lucide-react';
import './PracticeInterface.css';

const PracticeInterface = ({ onClose }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState(null);

    const startRecording = () => {
        setIsRecording(true);
        setTimeout(() => stopRecording(), 3000);
    };

    const stopRecording = async () => {
        setIsRecording(false);
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setResult({
                score: 92,
                fluency: "Native-like",
                feedback: "Excellent rhythm! Try emphasizing the second syllable of 'Namaste'.",
                transcription: "Namaste, mera naam Arjun hai."
            });
        }, 2000);
    };

    const resetPractice = () => setResult(null);

    return (
        <div className="overlay-backdrop">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="practice-modal"
            >
                <button onClick={onClose} className="modal-close"><X size={20} /></button>

                {/* Header */}
                <div className="modal-top">
                    <div className="badge-pill">Daily Challenge</div>
                    <h2>Speaking Practice</h2>
                </div>

                {!result ? (
                    <div className="practice-view">
                        <div className="sentence-card">
                            <button className="audio-play"><Volume2 size={20} /></button>
                            <h3>"Namaste, mera naam Arjun hai."</h3>
                            <p>Hello, my name is Arjun.</p>
                        </div>

                        <div className="mic-area">
                            <button
                                onClick={isRecording ? stopRecording : startRecording}
                                disabled={isProcessing}
                                className={`mic-btn ${isRecording ? 'recording' : ''}`}
                            >
                                {isProcessing ? <Loader2 className="animate-spin" size={32} /> :
                                    isRecording ? <Square size={24} fill="currentColor" /> : <Mic size={32} />}
                            </button>
                            <p className="mic-hint">
                                {isProcessing ? "Analyzing..." : isRecording ? "Listening..." : "Tap to Speak"}
                            </p>
                        </div>
                    </div>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="result-view">
                        <div className="score-circle">
                            <span className="score">{result.score}</span>
                            <span className="label">Score</span>
                        </div>

                        <div className="feedback-box">
                            <h4><Star size={16} fill="currentColor" className="text-yellow-500" /> Feedback</h4>
                            <p>{result.feedback}</p>
                        </div>

                        <div className="result-actions">
                            <button onClick={resetPractice} className="btn-outline"><RotateCcw size={16} /> Retry</button>
                            <button onClick={onClose} className="btn-solid">Continue <ChevronRight size={16} /></button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default PracticeInterface;