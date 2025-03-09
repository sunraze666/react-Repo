import Header from './components/Header/Header.jsx'
import TeachingSection from "./components/TeachingSection.jsx";
import ButtonSection from "./components/ButtonSection.jsx";
import IntroSection from "./components/introSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";


export default function App() {
    const [tab, setTab] = useState('feedback');

    return (
    <>
      <Header />
        <main>
            <IntroSection />

            <TabsSection active={tab} onChange={(current) => setTab(current)}/>

            {tab === 'main' && <>
                <TeachingSection />
                <ButtonSection />
            </>}

            {tab === 'feedback' && <FeedbackSection />}

      </main>
    </>
  )
}

