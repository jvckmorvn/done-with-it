import { useFormikContext } from 'formik';
import AppButton from '../AppButton';

export default function SubmitButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={() => {
        handleSubmit();
        if (onPress) {
          onPress();
        }
      }}
    />
  );
}
