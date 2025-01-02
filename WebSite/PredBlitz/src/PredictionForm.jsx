import { push, ref,set } from "firebase/database";
import { database } from "../config/Firebase";
import { useState } from "react";
import "./styles.css"

const PredictionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [winner, setWinner] = useState('');
  const [runsTeam1InPPR, setRunsTeam1InPPR] = useState('');
  const [wicketsTeam1InPPR, setWicketsTeam1InPPR] = useState('');
  const [runsAfter10OversTeam1, setRunsAfter10OversTeam1] = useState('');
  const [wicketsAfter10OversTeam1, setWicketsAfter10OversTeam1] = useState('');
  const [finalScoreTeam1, setFinalScoreTeam1] = useState('');
  const [finalWicketTeam1, setFinalWicketTeam1] = useState('');
  const [runsTeam2InPPR, setRunsTeam2InPPR] = useState('');
  const [wicketsTeam2InPPR, setWicketsTeam2InPPR] = useState('');
  const [runsAfter10OversTeam2, setRunsAfter10OversTeam2] = useState('');
  const [wicketsAfter10OversTeam2, setWicketsAfter10OversTeam2] = useState('');
  const [finalScoreTeam2, setFinalScoreTeam2] = useState('');
  const [finalWicketTeam2, setFinalWicketTeam2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const predictionsRef = ref(database, 'predictions');
    const newPredictionRef = push(predictionsRef);
    const predictionData = {
      name,
      email,
      winner,
      runsTeam1InPPR,
      wicketsTeam1InPPR,
      runsAfter10OversTeam1,
      wicketsAfter10OversTeam1,
      finalScoreTeam1,
      finalWicketTeam1,
      runsTeam2InPPR,
      wicketsTeam2InPPR,
      runsAfter10OversTeam2,
      wicketsAfter10OversTeam2,
      finalScoreTeam2,
      finalWicketTeam2,
    };
  
    console.log("Submitting prediction:", predictionData); 
  
    await set(newPredictionRef, predictionData);
  
    setName('');
    setEmail('');
    setWinner('');
    setRunsTeam1InPPR('');
    setWicketsTeam1InPPR('');
    setRunsAfter10OversTeam1('');
    setWicketsAfter10OversTeam1('');
    setFinalScoreTeam1('');
    setFinalWicketTeam1('');
    setRunsTeam2InPPR('');
    setWicketsTeam2InPPR('');
    setRunsAfter10OversTeam2('');
    setWicketsAfter10OversTeam2('');
    setFinalScoreTeam2('');
    setFinalWicketTeam2('');
    setSubmitted(true);
  };
  

  return (
    <div>
       {!submitted ? (
    <form onSubmit={handleSubmit} className="prediction-form">

      <div className="form-group">
        <label>Name:</label>
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
      <label>Winner:</label>
        <select value={winner} onChange={(e) => setWinner(e.target.value)} required>
          <option value="">Select winner</option>
          <option value="Team 1">Team 1</option>
          <option value="Team 2">Team 2</option>
        </select>
      </div>
      <div className="form-group">
        <label>Runs Scored by Team 1 in PowerPlay:</label>
        <input type="text" value={runsTeam1InPPR} onChange={(e) => setRunsTeam1InPPR(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Wickects Fallen in powerplay of Team 1:</label>
        <input type="number" value={wicketsTeam1InPPR} onChange={(e) => setWicketsTeam1InPPR(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Runs Scored by Team 1 in 10 overs:</label>
        <input type="number" value={runsAfter10OversTeam1} onChange={(e) => setRunsAfter10OversTeam1(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Wickects Fallen by 10 overs of Team 1:</label>
        <input type="number" value={wicketsAfter10OversTeam1} onChange={(e) => setWicketsAfter10OversTeam1(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Total Runs Scored by Team 1 :</label>
        <input type="number" value={finalScoreTeam1} onChange={(e) => setFinalScoreTeam1(e.target.value)} required />
      </div>
      <div className="form-group">
        <label> Total Wickects Fallen of Team 1:</label>
        <input type="number" value={finalWicketTeam1} onChange={(e) => setFinalWicketTeam1(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Runs Scored by Team 2 in PowerPlay:</label>
        <input type="number" value={runsTeam2InPPR} onChange={(e) => setRunsTeam2InPPR(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Wickects Fallen in powerplay of Team 2:</label>
        <input type="number" value={wicketsTeam2InPPR} onChange={(e) => setWicketsTeam2InPPR(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Runs Scored by Team 2 in 10 overs:</label>
        <input type="number" value={runsAfter10OversTeam2} onChange={(e) => setRunsAfter10OversTeam2(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Wickects Fallen by 10 overs of Team 2:</label>
        <input type="number" value={wicketsAfter10OversTeam2} onChange={(e) => setWicketsAfter10OversTeam2(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Total Runs Scored by Team 2 :</label>
        <input type="number" value={finalScoreTeam2} onChange={(e) => setFinalScoreTeam2(e.target.value)} required />
      </div>
      <div className="form-group">
        <label> Total Wickects Fallen of Team 2:</label>
        <input type="number" value={finalWicketTeam2} onChange={(e) => setFinalWicketTeam2(e.target.value)} required />
      </div>
      <button className="btn-submit"type="submit">Submit</button>
    </form>
    ): (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your prediction has been submitted successfully.</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
