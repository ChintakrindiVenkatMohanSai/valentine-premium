import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import ringAnimation from "../public/ring.json";

export default function App() {
  const [step, setStep] = useState(0);
  const [showNo, setShowNo] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="app">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">

          {/* STEP 0 – QUESTION */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.img
                src="/images/hero.jpg"
                className="heroImg"
                alt="Proposal"
              />

              <h1>Hunandha</h1>
              <p className="subtitle">Would you like to be my Valentine?</p>

              <div className="actions">
                <motion.button
                  className="yes"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setStep(1)}
                >
                  Yes
                </motion.button>

                <AnimatePresence>
                  {showNo && (
                    <motion.button
                      className="no"
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                      onHoverStart={() => setShowNo(false)}
                    >
                      No
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* STEP 1 – MESSAGE */}
          {step === 1 && (
            <motion.div
              key="step1"
              className="section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2>A message from Pranav</h2>
              <p>
                This isn’t a casual question.
                It’s a conscious choice — rooted in respect, intention,
                and a sincere desire to grow together.
                <br /><br />
                Hunandha, I see this as the beginning of something meaningful,
                built on trust, understanding, and shared values.
              </p>

              <div className="imageRow">
                <img src="/images/memory1.jpg" />
                <img src="/images/memory2.jpg" />
              </div>

              <div className="lottie">
                <Lottie animationData={ringAnimation} loop />
              </div>

              <div className="nav">
                <button
                  className="back"
                  onClick={() => {
                    setShowNo(true);
                    setStep(0);
                  }}
                >
                  ← Back
                </button>

                <button className="futureBtn" onClick={() => setStep(2)}>
                  Our Future
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2 – FUTURE */}
          {step === 2 && (
            <motion.div
              key="step2"
              className="section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2>Looking Ahead</h2>

              <div className="futureGrid">
                <div><img src="/images/future-home.jpg" /><p>Our Home</p></div>
                <div><img src="/images/future-car.jpg" /><p>Journeys</p></div>
                <div><img src="/images/future-bike.jpg" /><p>Adventures</p></div>
                <div><img src="/images/future-family.jpg" /><p>Family</p></div>
              </div>

              <div className="nav">
                <button className="back" onClick={() => setStep(1)}>
                  ← Back
                </button>

                <button className="futureBtn" onClick={() => setStep(3)}>
                  🎁 Surprise
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 – SURPRISE */}
          {step === 3 && (
            <motion.div
              key="step3"
              className="section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h2>Just for You ❤️</h2>

              {!playVideo && (
                <motion.button
                  className="surpriseBtn"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setPlayVideo(true)}
                >
                  Play Surprise 🎬
                </motion.button>
              )}

              {playVideo && (
                <motion.video
                  src="/video/surprise.mp4"
                  controls
                  autoPlay
                  className="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}

              <button
                className="back"
                onClick={() => {
                  setPlayVideo(false);
                  setStep(2);
                }}
              >
                ← Back
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>
    </div>
  );
}
