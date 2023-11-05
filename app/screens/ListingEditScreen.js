import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  FormImagePicker as ImagePicker,
  SubmitButton
} from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least 1 image.')
});

const categories = [
  { label: 'Furniture', id: 1 },
  { label: 'Clothing', id: 2 },
  { label: 'Camera', id: 3 },
];

export default function ListingEditScreen() {
  const location = useLocation();

  function handleSubmit(values) {
    const newListing = {
      title: values.title,
      price: values.price,
      description: values.description,
      category: values.category,
      images: values.images,
    };
    const result = listingsApi.addListing({ ...newListing, location });
    console.log(result);
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ImagePicker name='images'/>
        <FormField maxLength={255} name='title' placeholder='Title'/>
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <Picker
          items={categories}
          name='category'
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          width={'50%'}
        />
        <FormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post'/>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
