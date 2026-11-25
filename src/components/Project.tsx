import React from "react";
import donacook from '../assets/images/donacook.png';
import thumbnail_data from '../assets/images/thumbnail data.png';
import fake_news from '../assets/images/fake news.png';
import intel from '../assets/images/intel.png';
import epa_green from '../assets/images/epa green.png';
import emo from '../assets/images/emo.png';
import pertussisPaper from '../assets/files/pertussis-audio-classification.pdf';
import dataPdf1 from '../assets/files/fake news.pdf';
import dataPdf2 from '../assets/files/intel.pdf';
import dataPdf3 from '../assets/files/epa green.pdf';
import dataPdf4 from '../assets/files/emo.pdf';
import pertussisThumbnail from '../assets/images/pertussis-audio-classification.png';
import '../assets/styles/Project.scss';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Publications</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={pertussisPaper} download="Evaluation of MobileNetV3Small for Pertussis Audio Classification.pdf"><img src={pertussisThumbnail} className="zoom" alt="First page of the MobileNetV3Small pertussis audio classification paper" width="100%"/></a>
                <a href={pertussisPaper} download="Evaluation of MobileNetV3Small for Pertussis Audio Classification.pdf"><h2>Evaluation of MobileNetV3Small for Pertussis Audio Classification: A Pre-Emphasis Ablation Study</h2></a>
                <p>Evaluated MobileNetV3Small on Log-Mel spectrograms for pertussis cough classification, comparing baseline preprocessing with pre-emphasis (α = 0.97). The pre-emphasis setup achieved 92.31% accuracy across 13 test recordings; the small test set limits generalizability.</p>
            </div>
            <div className="project">
                <a href="https://colab.research.google.com/drive/1J8IIE8joaGisiC7UMoPskmVPFeW9mwgA?usp=sharing" target="_blank" rel="noreferrer"><img src={thumbnail_data} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://colab.research.google.com/drive/1J8IIE8joaGisiC7UMoPskmVPFeW9mwgA?usp=sharing" target="_blank" rel="noreferrer"><h2>Descriptive Statistics of House Price and Development</h2></a>
                <p>Conducted exploratory data analysis and statistical reporting on housing price datasets using Python, Pandas, NumPy, Matplotlib, and Seaborn to identify factors influencing property values through data visualization and descriptive analytics.</p>
            </div>
            <div className="project">
                <a href={dataPdf1} download="fake news.pdf"><img src={fake_news} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={dataPdf1} download="fake news.pdf"><h2>Fake News Detection</h2></a>
                <p>Developed a fake news detection system using BERT, TensorFlow, and Hugging Face Transformers, achieving 94.8% accuracy in model evaluation.</p>
            </div>
            <div className="project">
                <a href={dataPdf3} download="epa green.pdf"><img src={epa_green} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={dataPdf3} download="epa green.pdf"><h2>Machine Learning Approaches to Analyzing Determinants of Fuel Efficiency in Vehicles: A Comprehensive Study Using EPA Green Vehicles Data</h2></a>
                <p>Co-authored a machine learning research paper comparing Linear Regression, Decision Tree, and Random Forest models to predict vehicle fuel efficiency using the EPA Green Vehicles dataset, evaluating model performance with MAE, MSE, RMSE, and R² metrics. </p>
            </div>
            <div className="project">
                <a href={dataPdf4} download="emo.pdf"><img src={emo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={dataPdf4} download="emo.pdf"><h2>Emotion Classification On Indonesian Song Lyrics Using Fine-Tuned INDOBERT-BiLSTM</h2></a>
                <p>Developed an NLP research project comparing Fine-tuned IndoBERT and hybrid IndoBERT-BiLSTM models for emotion classification on Indonesian song lyrics, applying exploratory data analysis, text preprocessing, SMOTE, and model evaluation using Accuracy, Precision, Recall, and F1-score.</p>
            </div>
            <div className="project">
                <a href="https://github.com/compute-code/SoftwareEngineeringProject.git" target="_blank" rel="noreferrer"><img src={donacook} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/compute-code/SoftwareEngineeringProject.git" target="_blank" rel="noreferrer"><h2>DonaCook</h2></a>
                <p>Collaborated with a team to develop DonaCook, a web application that facilitates food donations and provides affordable cooking recipes to reduce food waste, using Laravel and Bootstrap.</p>
            </div>
            <div className="project">
                <a href={dataPdf2} download="intel.pdf"><img src={intel} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={dataPdf2} download="intel.pdf"><h2>Movement Detection For Security System Project</h2></a>
                <p>Collaborated with a team to develop an AI motion detection security system using Python and OpenCV, implementing real-time video processing to detect object movement in surveillance areas.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
