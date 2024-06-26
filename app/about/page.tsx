import { Metadata } from "next";
import styles from "../../styles/etc.module.css";

export const metadata: Metadata = {
    title: "All about",
};

export default function About() {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.title}>About The New York Times</h1>
                <span className={styles.msg}>
                The New York Times is an American daily newspaper based in New York City. 
                The New York Times covers domestic, national, and international news, 
                and comprises opinion pieces, investigative reports, and reviews. 
                As one of the longest-running newspapers in the United States, 
                it serves as one of the country's newspapers of record. 
                As of February 2024, the newspaper has a readership of 9.7 million 
                digital-only subscribers and 660,000 print subscribers, 
                making it the second-largest newspaper in the country by print circulation. 
                The Times has received 137 Pulitzer Prizes as of 2023, 
                the most of any publication, among other accolades. 
                The New York Times is published by The New York Times Company
                since 1896, the company has been chaired by the Ochs-Sulzberger family, 
                including its current chairman and the paper's publisher, A. G. 
                Sulzberger. The Times is headquartered at The New York Times Building in Manhattan.
                </span>
        </div>
    );
  }