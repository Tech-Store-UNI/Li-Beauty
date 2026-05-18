import { useState } from "react";
import { Modal, Box, Fade } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { StepOneAgendamento } from "./StepOneAgendamento/StepOneAgendamento";
import { StepTwoAgendamento } from "./StepTwoAgendamento/StepTwoAgendamento";


interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: FormDataProps) => void;
}

export interface FormDataProps {
  categoria: string;
  servico: string;
  valor: string;
  data: Dayjs | null;
  hora: string;
  nome: string;
  email: string;
  telefone: string;
  pagamento: string;
}

export const ModalAgendamento = ({ open, onClose, onSave }: Props) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormDataProps>({
    categoria: "",
    servico: "",
    valor: "",
    data: dayjs(),
    hora: "",
    nome: "",
    email: "",
    telefone: "",
    pagamento: "",
  });

  const resetModal = () => {
    setStep(1);

    setFormData({
      categoria: "",
      servico: "",
      valor: "",
      data: dayjs(),
      hora: "",
      nome: "",
      email: "",
      telefone: "",
      pagamento: "",
    });

    onClose();
  };

  return (
    <Modal open={open} onClose={resetModal} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)",
            p: 2,
          }}
        >
          {step === 1 && (
            <StepOneAgendamento
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setStep(2)}
              onClose={resetModal}
            />
          )}

          {step === 2 && (
            <StepTwoAgendamento
              formData={formData}
              setFormData={setFormData}
              prevStep={() => setStep(1)}
              onClose={resetModal}
              onSave={onSave}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
};