import { withTests } from '@storybook/addon-jest';
import results from '@/__tests__/.jest-test-results.json';
import BaseInput from '@/components/Inputs/BaseInput';

export default {
  title: 'Component/Inputs/BaseInput',
  component: BaseInput,
  argTypes: {
    tag: { control: 'text' },
  },
  decorators: [withTests({ results })],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `<BaseInput  v-bind="$props" v-model="value" @input="test" />`,
  data() {
    return {
      value: '',
    };
  },
  methods: {
    test(e, test) {
      console.log(e, test);
    },
  },
});

export const 기본 = Template.bind({});

export const 비활성화 = Template.bind({});
비활성화.args = {
  placeholder: '플레이스홀더',
  disabled: true,
};

export const 왼쪽_아이콘 = Template.bind({});
왼쪽_아이콘.args = {
  placeholder: '플레이스홀더',
  addonLeftIcon: 'tim-icons icon-mobile',
};

export const 오른쪽_아이콘 = Template.bind({});
오른쪽_아이콘.args = {
  placeholder: '플레이스홀더',
  addonRightIcon: 'tim-icons icon-mobile',
};

export const 라벨_필수 = Template.bind({});
라벨_필수.args = {
  label: '필수',
  required: true,
  placeholder: '플레이스홀더',
};
