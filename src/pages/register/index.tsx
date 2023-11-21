import React, {useState} from 'react';
import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import color from "../../styles/color";
import RegisterPage from "../../components/Register";
import { Step } from "./types";
import Footer from "../../components/Footer/Footer";

const Register = () => {
    const [step, setStep] = useState<Step>(1);
    return (
        <Layout>
            <Screen bgcolor={color.white}>
                <RegisterPage
                    step={step}
                    setStep={setStep}
                />
            </Screen>
            <Footer isGNB={false} page={1} />
        </Layout>
    );
};

export default Register;
