/* eslint-disable react/prop-types */
import React from 'react';
import {
  Popover, Divider, Image, Card, Button, Avatar,
  Skeleton, Tooltip,
} from 'antd';
import {
  CodepenOutlined, createFromIconfontCN, DownOutlined,
  CalendarOutlined, SnippetsOutlined, CaretRightOutlined,
} from '@ant-design/icons';
import { Link } from 'gatsby';

import Container from '../components/DynamicComponents/Container';
import Layout from '../components/Layout';
import Icon from '../components/elements/Icon';
import Img from '../components/elements/Image';

const { Meta } = Card;

const getPopOver = (text, inverse = false, placement = 'right') => (
  <div className="popover-wrapper ml-20">
    <Popover
      overlayClassName="popover-wrapper"
      content={<pre>{text}</pre>}
      trigger="hover"
      placement={placement}
    >
      <CodepenOutlined style={{ color: inverse ? '#fff' : '#000' }} />
    </Popover>
  </div>
);

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const getHeader = ({ level, content, className = '' }) => {
  switch (level) {
    case 1:
      return <h1 className={`ds-h${level} ${className}`}>{content}</h1>;
    case 2:
      return <h2 className={`ds-h${level} ${className}`}>{content}</h2>;
    case 3:
      return <h3 className={`ds-h${level} ${className}`}>{content}</h3>;
    case 4:
      return <h4 className={`ds-h${level} ${className}`}>{content}</h4>;
    case 5:
      return <h5 className={`ds-h${level} ${className}`}>{content}</h5>;
    default:
      return null;
  }
};

const cardGridList = [
  {
    title: <IconFont type="icon-javascript" />,
    content: 'It provides a full cycle of product/inventory management, shipping and delivery, and content management, allowing us to select different payment methods to use in our shop. All this stuff in Cloud, so no need for deployment. This is a quick start for online business. Also, a lot of useful plugins available for marketing',
  }, {
    title: <IconFont type="icon-java" />,
    content: 'It provides a full cycle of product/inventory management, shipping and delivery, and content management, allowing us to select different payment methods to use in our shop. All this stuff in Cloud, so no need for deployment. This is a quick start for online business. Also, a lot of useful plugins available for marketing',
  }, {
    title: <IconFont type="icon-shoppingcart" />,
    content: 'It provides a full cycle of product/inventory management, shipping and delivery, and content management, allowing us to select different payment methods to use in our shop. All this stuff in Cloud, so no need for deployment. This is a quick start for online business. Also, a lot of useful plugins available for marketing',
  }, {
    title: <IconFont type="icon-python" />,
    content: 'It provides a full cycle of product/inventory management, shipping and delivery, and content management, allowing us to select different payment methods to use in our shop. All this stuff in Cloud, so no need for deployment. This is a quick start for online business. Also, a lot of useful plugins available for marketing',
  },
];

const cardPrimaryGridList = [
  {
    title: 'Delivery in time',
    avatar: <CalendarOutlined />,
    description: 'We guarantee to get the project done in time and on budget and confirm it in the contract',
  }, {
    title: 'Transparency',
    avatar: <Avatar src="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/combine-merge.png" />,
    description: 'We guarantee to get the project done in time and on budget and confirm it in the contract',
  }, {
    title: 'Legal contract',
    avatar: <SnippetsOutlined />,
    description: 'We guarantee to get the project done in time and on budget and confirm it in the contract',
  },
];

const iconButtonList = ['angleRight', 'cross', 'list'];
const socialIconList = ['instagram', 'facebook', 'linkedin'];

const SectionTitle = ({ title, code }) => (
  <h3 className="ds-h3 text-light mb-0">
    {title}
    {code && <code className="ds-code">{code}</code>}
  </h3>
);

const CodeGroup = (props) => (
  <div className={`code-group code-${props.type}`}>
    <Divider className="invisible" />
    <div className="flex items-center">
      {props.children}
    </div>
    {props.extraPadding && <Divider className="invisible" />}
  </div>
);

const headLevelList = [1, 2, 3, 4, 5];

const Framework = () => (
  <Layout hideFooter>
    <Container
      size="lg"
      gap="lg"
    >
      <div className="row section-sticky">
        <div className="col-xs-12 col-sm-6">
          <SectionTitle title="Typography" />
        </div>
        <div className="col-xs-12 col-sm-6">
          <SectionTitle title="Typography" code="primary" />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6">
          {headLevelList.map((h) => (
            <div key={h} className="code-group">
              <div className="flex items-center">
                {getHeader({ level: h, content: `Heading H${h}` })}
                {getPopOver(`<h${h} className="ds-h${h}">Heading H${h}</h$>`)}
              </div>
            </div>
          ))}
        </div>
        <div className="col-xs-12 col-sm-6">
          {headLevelList.map((h) => (
            <div key={h} className="code-group">
              <div className="flex items-center">
                {getHeader({ level: h, content: `Heading H${h}`, className: 'text-primary' })}
                {getPopOver(`<h${h} className="ds-h${h} text-primary">Heading H${h}</h$>`)}
              </div>
            </div>
          ))}
        </div>

        <Divider className="invisible" />
      </div>

      <div className="row section-sticky">
        <div className="col-xs-12 col-sm-4">
          <SectionTitle title="Image" />
        </div>
        <div className="col-xs-12 col-sm-4">
          <SectionTitle title="Image" code="reverse" />
        </div>
        <div className="col-xs-12 col-sm-4">
          <SectionTitle title="Image" code="fluid" />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `)}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered-reverse"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered-reverse"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `, false, 'bottom')}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              className="ds-image-bordered-reverse"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  className="ds-image-bordered-reverse"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `)}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Divider className="invisible" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered"
              src="error"
              fallback="https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered"
                  src="error"
                  fallback="https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png"
                />
              `)}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered-reverse"
              src="error"
              fallback="https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered-reverse"
                  src="error"
                  fallback="https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png"
                />
              `, false, 'bottom')}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              className="ds-image-bordered-reverse"
              src="error"
              fallback="https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  className="ds-image-bordered-reverse"
                  src="error"
                  fallback="https://plasticsurgery-ua.org/wp-content/uploads/2016/11/default-placeholder.png"
                />
              `)}
            </div>
          </div>
        </div>
      </div>

      <div className="row section-sticky">
        <div className="col-xs-12 col-sm-4">
          <SectionTitle title="Image" code="backdrop" />
        </div>
        <div className="col-xs-12 col-sm-4" />
        <div className="col-xs-12 col-sm-4">
          <SectionTitle title="Image" code="backdrop" />
        </div>
      </div>

      <div className="row">
        <Divider className="invisible" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered backdrop"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered backdrop"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `, 'inverse')}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered-reverse backdrop"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered-reverse backdrop"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `)}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Divider className="invisible" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered backdrop backdrop-reverse"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered backdrop backdrop-reverse"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `)}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Image
              width={230}
              height={265}
              className="ds-image-bordered-reverse backdrop backdrop-reverse"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
            />
            <div className="flex-center block">
              {getPopOver(`
                import { Image } from 'antd';

                <Image
                  width={230}
                  height={265}
                  className="ds-image-bordered-reverse backdrop backdrop-reverse"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                />
              `, 'inverse')}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Divider className="invisible" />
        <Divider className="invisible" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Img
              useWrapper
              wrapClassName="backdrop backdrop-reverse"
              className="ds-image-bordered-reverse"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
              minWidth="405"
              minHeight="465"
            />
            <div className="flex-center block">
              {getPopOver(`
                import Img from '../components/elements/Image';

                <Img
                  useWrapper
                  wrapClassName="backdrop backdrop-reverse"
                  className="ds-image-bordered-reverse"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                  minWidth="405"
                  minHeight="465"
                />
              `)}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4" />
        <div className="col-xs-12 col-sm-4">
          <div className="code-group">
            <Img
              useWrapper
              wrapClassName="backdrop"
              className="ds-image-bordered"
              src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
              minWidth="405"
              minHeight="465"
            />
            <div className="flex-center block">
              {getPopOver(`
                import Img from '../components/elements/Image';

                <Img
                  useWrapper
                  wrapClassName="backdrop"
                  className="ds-image-bordered"
                  src="https://admin-ds-dev.s3.eu-central-1.amazonaws.com/image_5_a9df408cb2.png"
                  minWidth="405"
                  minHeight="465"
                />
              `)}
            </div>
          </div>
        </div>
      </div>

      <Divider className="invisible" />
      <Divider className="invisible" />
      <div className="row section-sticky">
        <div className="col-xs-12">
          <div className="flex items-center block">
            <SectionTitle title="Text card grid" code="ds-card-text" />
            {getPopOver(`
  import { Card, Divider, Button } from 'antd';

  const cardGridList = [
    {
      title: <IconFont type="icon-javascript" />,
      content: 'It provides a full cycle of product/inventory management, a lot of useful plugins available for marketing ...',
    }, {
      title: <IconFont type="icon-java" />,
      content: 'It provides a full cycle of product/inventory management, a lot of useful plugins available for marketing ...',
    }, {
      title: <IconFont type="icon-shoppingcart" />,
      content: 'It provides a full cycle of product/inventory management, a lot of useful plugins available for marketing ...',
    }, {
      title: <IconFont type="icon-python" />,
      content: 'It provides a full cycle of product/inventory management, a lot of useful plugins available for marketing ...',
    },
  ];

  {cardGridList.map(({ title, content }) => (
    <div key={title} className="col-xs-12 col-sm-6">
      <Card
        title={title}
        bordered={false}
        className="ds-card ds-card-text"
      >
        {content}
      </Card>
    </div>
  ))}

  <Divider className="ds-divider ds-divider-primary">
    <Button
      className="ds-button ds-button-icon-reverse"
      icon={<DownOutlined />}
      type="white"
    >
      View more
    </Button>
  </Divider>
          `)}
          </div>
        </div>
      </div>

      <Divider className="invisible" />

      <div className="row row-sm">
        <div className="col-xs-12">
          <h3 className="ds-h3 text-primary text-uppercase">MAIN Technologies</h3>
        </div>
        {cardGridList.map(({ title, content }) => (
          <div key={title} className="col-xs-12 col-sm-6">
            <Card
              title={title}
              bordered={false}
              className="ds-card ds-card-text"
            >
              {content}
            </Card>
          </div>
        ))}

        <Divider className="ds-divider ds-divider-primary">
          <Button
            className="ds-button ds-button-icon-reverse"
            icon={<DownOutlined />}
            type="white"
          >
            View more
          </Button>
        </Divider>
      </div>

      <Divider className="invisible" />
      <div className="row section-sticky">
        <div className="col-xs-12">
          <div className="flex items-center block">
            <SectionTitle title="Text card grid" code="ds-card-primary, row-xs" />
            {getPopOver(`
import { Card, Divider, Button, Avatar, Meta, Skeleton } from 'antd';

const cardPrimaryGridList = [{
  title: 'Delivery in time',
  avatar: <CalendarOutlined />,
  description: 'We guarantee to get the project done in time and on budget and confirm it in the contract',
}, {
  title: 'Transparency',
  avatar: <Avatar src="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/combine-merge.png" />,
  description: 'We guarantee to get the project done in time and on budget and confirm it in the contract',
}, {
  title: 'Legal contract',
  avatar: <SnippetsOutlined />,
  description: 'We guarantee to get the project done in time and on budget and confirm it in the contract',
}];

<div className="row row-xs">
  <div className="col-xs-12">
    <div className="flex-center block">
      <h3 className="ds-h3 text-primary text-uppercase mb-sm">We guarantee</h3>
    </div>
  </div>
  {cardPrimaryGridList.map(({ title, avatar, description }) => (
    <div key={title} className="col-xs-12 col-sm-4">
      <Card
        bordered={false}
        className="ds-card ds-card-primary ds-card-rounded ds-card-centered"
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={(
              <div className="ds-card-avatar-wrapper ds-card-avatar-md ds-image-visibility ds-image-invert">
                {avatar}
              </div>
            )}
            title={<h4 className="ds-h4 text-white mb-0 lh-1">{title}</h4>}
            description={description}
          />
        </Skeleton>
      </Card>
    </div>
  ))}
</div>
          `)}
          </div>
        </div>
      </div>

      <Divider className="invisible" />

      <div className="row row-xs">
        <div className="col-xs-12">
          <div className="flex-center block">
            <h3 className="ds-h3 text-primary text-uppercase mb-sm">We guarantee</h3>
          </div>
        </div>
        {cardPrimaryGridList.map(({ title, avatar, description }) => (
          <div key={title} className="col-xs-12 col-sm-4">
            <Card
              bordered={false}
              className="ds-card ds-card-primary ds-card-rounded ds-card-centered"
            >
              <Skeleton loading={false} avatar active>
                <Meta
                  avatar={(
                    <div className="ds-card-avatar-wrapper ds-card-avatar-md ds-image-visibility ds-image-invert">
                      {avatar}
                    </div>
                  )}
                  title={<h4 className="ds-h4 text-white mb-0 lh-1">{title}</h4>}
                  description={description}
                />
              </Skeleton>
            </Card>
          </div>
        ))}
      </div>

      <Divider className="invisible" />
      <div className="row section-sticky">
        <div className="col-xs-12">
          <div className="flex items-center block">
            <SectionTitle title="Text card grid" code="<Skeleton loading={true} avatar active>" />
            {getPopOver(`
import { Card, Divider, Button, Avatar, Meta, Skeleton } from 'antd';


{cardPrimaryGridList.map(({ title, avatar, description }) => (
  <div key={title} className="col-xs-12 col-sm-4">
    <Card
      bordered={false}
      className="ds-card ds-card-primary ds-card-rounded ds-card-centered"
    >
      <Skeleton loading avatar active>
        <Meta
          avatar={(
            <div className="ds-card-avatar-wrapper ds-card-avatar-md ds-image-visibility ds-image-invert">
              {avatar}
            </div>
          )}
          title={<h4 className="ds-h4 text-white mb-0 lh-1">{title}</h4>}
          description={description}
        />
      </Skeleton>
    </Card>
  </div>
))}
          `)}
          </div>
        </div>
      </div>

      <Divider className="invisible" />

      <div className="row row-xs">
        <div className="col-xs-12">
          <div className="flex-center block">
            <h3 className="ds-h3 text-primary text-uppercase mb-sm">We guarantee</h3>
          </div>
        </div>
        {cardPrimaryGridList.map(({ title, avatar, description }) => (
          <div key={title} className="col-xs-12 col-sm-4">
            <Card
              bordered={false}
              className="ds-card ds-card-primary ds-card-rounded ds-card-centered"
            >
              <Skeleton loading avatar active>
                <Meta
                  avatar={(
                    <div className="ds-card-avatar-wrapper ds-card-avatar-md ds-image-visibility ds-image-invert">
                      {avatar}
                    </div>
                  )}
                  title={<h4 className="ds-h4 text-white mb-0 lh-1">{title}</h4>}
                  description={description}
                />
              </Skeleton>
            </Card>
          </div>
        ))}
      </div>

      <Divider className="invisible" />
      <div className="row section-sticky">
        <div className="col-xs-12 col-sm-6">
          <SectionTitle title="Button" code="normal" />
        </div>
        <div className="col-xs-12 col-sm-6">
          <SectionTitle title="Button" code="normal" />
        </div>
      </div>

      <Divider className="invisible" />

      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <CodeGroup>
            <Tooltip title="play">
              <Button
                className="ds-button ds-button-lg-extra"
                type="white"
                shape="circle"
                size="large"
                icon={<CaretRightOutlined />}
              />
            </Tooltip>
            {getPopOver(`
  import { Tooltip, Button } from 'antd';

  <Tooltip
    title="play" // optional
  >
    <Button
      className="ds-button ds-button-lg-extra"
      type="white"
      shape="circle"
      size="large"
      icon={<CaretRightOutlined />}
    />
  </Tooltip>
            `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              type="primary"
            >
              Read More
            </Button>
            {getPopOver(`
  import { Button } from 'antd';

  <Button
    className="ds-button"
    type="primary"
  >
    Read More
  </Button>
            `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              type="white"
            >
              Read More
            </Button>
            {getPopOver(`
  import { Button } from 'antd';

  <Button
    className="ds-button"
    type="white"
  >
    Read More
  </Button>
            `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              ghost
              type="white"
            >
              Read More
            </Button>
            {getPopOver(`
  import { Button } from 'antd';

  <Button
    className="ds-button"
    ghost
    type="white"
  >
    Read More
  </Button>
            `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button ds-button-icon-reverse"
              icon={<DownOutlined />}
              type="white"
            >
              View more
            </Button>
            {getPopOver(`
  import { Button } from 'antd';

  <Button
    className="ds-button ds-button-icon-reverse"
    icon={<DownOutlined />}
    type="white"
  >
    View more
  </Button>
            `)}
          </CodeGroup>

          {iconButtonList.map((icon) => (
            <CodeGroup key={icon}>
              <div className="flex items-center block">
                <Button
                  className="ds-button"
                  type="white"
                  shape="circle"
                  size="large"
                  icon={<Icon name={icon} />}
                />
                {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button ds-button-lg-extra"
    type="white"
    shape="circle"
    size="large"
    icon={<Icon name="${icon}" />}
  />
              `)}
              </div>
            </CodeGroup>
          ))}

          <CodeGroup>
            <Button
              className="ds-button text-default"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="crossLight" />}
            />
            {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button text-default"
    ghost
    type="white"
    shape="circle"
    icon={<Icon name="crossLight" />}
  />
              `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="clip" />}
            />
            {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button"
    ghost
    type="white"
    shape="circle"
    icon={<Icon name="clip" />}
  />
              `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="arrowRight" />}
            />
            {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button"
    ghost
    type="white"
    shape="circle"
    icon={<Icon name="arrowRight" />}
  />
              `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="angleRight" width="8" height="8" />}
            />
            {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button"
    ghost
    type="white"
    shape="circle"
    icon={<Icon name="angleRight" width="8" height="8" />}
  />
              `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button text-default"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="angleRight" width="8" height="8" />}
            />
            {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button text-default"
    ghost
    type="white"
    shape="circle"
    icon={<Icon name="angleRight" width="8" height="8" />}
  />
              `)}
          </CodeGroup>

          <CodeGroup>
            <Button
              className="ds-button"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="angleRight" width="18" height="18" />}
            />
            {getPopOver(`
  import {  Button } from 'antd';
  import Icon from '../components/elements/Icon';

  <Button
    className="ds-button"
    ghost
    type="white"
    shape="circle"
    icon={<Icon name="angleRight" width="18" height="18" />}
  />
              `)}
          </CodeGroup>

          <Divider className="invisible" />
          <CodeGroup type="primary" extraPadding>
            {socialIconList.map((icon) => (
              <div key={icon} className="flex-center block">
                <Link
                  className="ds-link ds-link-white"
                  to="/"
                >
                  <Icon name={icon} />
                </Link>
                {getPopOver(`
  import Icon from '../components/elements/Icon';

  <Link
    className="ds-link ds-link-white"
    to="/"
  >
    <Icon name={icon} />
  </Link>
              `, 'inverse')}
              </div>
            ))}
          </CodeGroup>

          <CodeGroup>
            {socialIconList.map((icon) => (
              <div key={icon} className="flex-center block">
                <Link
                  className="ds-link ds-link-primary"
                  to="/"
                >
                  <Icon name={icon} />
                </Link>
                {getPopOver(`
  import Icon from '../components/elements/Icon';

  <Link
    className="ds-link ds-link-primary"
    to="/"
  >
    <Icon name={icon} />
  </Link>
              `)}
              </div>
            ))}
          </CodeGroup>
        </div>
      </div>

    </Container>
  </Layout>
);

export default Framework;
