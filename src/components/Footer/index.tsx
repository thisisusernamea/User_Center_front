import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {NOTE_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '律己出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Knowledge Base',
          title: 'Java学习知识库',
          href: NOTE_LINK,
          blankTarget: true, //true 点击该链接重新打开新的页面展示
        },
        {
          key: 'github',
          title: <><GithubOutlined />律己 GitHub</>,
          href: 'https://github.com/thisisuernama',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
