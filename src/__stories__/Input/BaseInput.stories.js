// import storybookCodePanel from 'storybook-code-panel';
import { withTests } from '@storybook/addon-jest';
import { action } from '@storybook/addon-actions';
import results from '@/__tests__/.jest-test-results.json';
import BaseInput from '@/components/Inputs/BaseInput';

export default {
  title: 'Component/Inputs/BaseInput',
  parameters: {
    storybookCodePanel: {
      disabled: false,
      files: [
        {
          fileName: 'button.js',
          language: 'javascript',
          // Not needed if file extension was mapped globally, or file extension matches Prism language key
          // eslint-disable-next-line import/no-webpack-loader-syntax
          code: require('!!raw-loader!@/__stories__/Input/BaseInput.stories.js'),
        },
        {
          fileName: 'BaseInput.vue',
          language: 'javascript',
          // eslint-disable-next-line import/no-webpack-loader-syntax
          code: require('!!raw-loader!@/components/Inputs/BaseInput'),
        },
      ],
    },
  },
  component: BaseInput,

  argTypes: {
    tag: { control: 'text' },
  },
  decorators: [withTests({ results })],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `<BaseInput  v-bind="$props" v-model="value" @input="input"  @click="click"/>`,
  data() {
    return {
      value: '',
    };
  },
  methods: {
    input: action('input'),
    click: action('clicked'),
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
