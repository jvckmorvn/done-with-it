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
import categoriesApi from '../api/categories';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least 1 image.')
});

export default function ListingEditScreen() {
  const categories = categoriesApi.getCategories();
  const location = useLocation();

  function handleSubmit(listing, { resetForm }) {
    const newListing = {
      title: listing.title,
      price: listing.price,
      description: listing.description,
      category: listing.category,
      images: listing.images,
    };
    
    const result = listingsApi.addListing({ ...newListing, location });
    if (result?.length > 0) {
      resetForm();
    }
    else {
      console.log('Error submitting form');
    }
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
