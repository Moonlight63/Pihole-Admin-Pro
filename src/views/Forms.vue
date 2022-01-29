<script setup>
const titleStack = ref(['Admin', 'Forms'])

const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]

const form = reactive({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '',
  department: selectOptions[0],
  subject: '',
  question: ''
})

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})

const submit = () => {
  //
}
</script>

<template>
  <TitleBar :titleStack="titleStack" />
  <HeroBar>Forms</HeroBar>

  <MainSection>
    <TitleSubBar :icon="mdiBallotOutline" title="Forms example" />
    <CardComponent
      title="Forms"
      :icon="mdiBallot"
      form
      @submit.prevent="submit"
    >
      <Field label="Grouped with icons">
        <Control v-model="form.name" :icon="mdiAccount" />
        <Control v-model="form.email" type="email" :icon="mdiMail" />
      </Field>

      <Field label="With help line" help="Do not enter the leading zero">
        <Control
          v-model="form.phone"
          type="tel"
          placeholder="Your phone number"
        />
      </Field>

      <Field label="Dropdown">
        <Control v-model="form.department" :options="selectOptions" />
      </Field>

      <Divider />

      <Field label="Question" help="Your question. Max 255 characters">
        <Control type="textarea" placeholder="Explain how we can help you" />
      </Field>

      <Divider />

      <JbButtons>
        <JbButton type="submit" color="info" label="Submit" />
        <JbButton type="reset" color="info" outline label="Reset" />
      </JbButtons>
    </CardComponent>
  </MainSection>

  <TitledSection> Custom elements </TitledSection>

  <MainSection>
    <CardComponent title="Custom elements" :icon="mdiBallotOutline">
      <Field label="Checkbox" wrapBody>
        <CheckRadioPicker
          v-model="customElementsForm.checkbox"
          name="sample-checkbox"
          :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }"
        />
      </Field>

      <Divider />

      <Field label="Radio" wrapBody>
        <CheckRadioPicker
          v-model="customElementsForm.radio"
          name="sample-radio"
          type="radio"
          :options="{ one: 'One', two: 'Two' }"
        />
      </Field>

      <Divider />

      <Field label="Switch">
        <CheckRadioPicker
          v-model="customElementsForm.switch"
          name="sample-switch"
          type="switch"
          :options="{ one: 'One', two: 'Two' }"
        />
      </Field>

      <Divider />

      <FilePicker v-model="customElementsForm.file" />
    </CardComponent>
  </MainSection>

  <BottomOtherPagesSection />
</template>
