export type CognitiveLevel = 'Level 1 (C1: Mengingat)' | 'Level 1 (C2: Memahami)' | 'Level 2 (C3: Mengaplikasikan)';

export type CompetencyTopic = 
  | 'Kata Sifat & Imbuhan pe-'
  | 'Sinonim & Antonim'
  | 'Kalimat Majemuk Setara'
  | 'Unsur Intrinsik & Majas'
  | 'Kalimat Langsung & Tidak Langsung'
  | 'Teks Fiksi, Nonfiksi & Bagian Buku'
  | 'Literasi Wanaraya Barito Kuala';

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: number;
  level: CognitiveLevel;
  topic: CompetencyTopic;
  stimulusTitle: string;
  stimulusText: string;
  stimulusType: 'narasi' | 'infografis' | 'tabel' | 'dialog';
  stimulusImage?: string;
  infographicData?: {
    location: string;
    highlights: { label: string; value: string; desc: string }[];
    chartNote?: string;
  };
  question: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface StudentProfile {
  username: string;
  studentClass: string;
  schoolName: string;
  nisn?: string;
}

export interface ExamResult {
  student: StudentProfile;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  score: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  totalQuestions: number;
  completedAt: string;
  certificateNumber: string;
  timeSpentSeconds: number;
}
