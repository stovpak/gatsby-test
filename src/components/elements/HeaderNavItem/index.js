import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { isEmpty } from 'lodash';
import { Menu, Dropdown } from 'antd';
import Button from '../Button';
import Icon from '../Icon';

const HeaderNavItem = ({ headerLabel }) => {
  if (!isEmpty(headerLabel.sublinksBlock)) {
    const menu = (
      <Menu className="ant-dropdown-menu-columns">
        {headerLabel.sublinksBlock.map((link) => (
          <Menu.Item key={link.id}>
            {!isEmpty(link.label) && (
              <div className="item-title">
                {link.label}
              </div>
            )}

            {!isEmpty(link.sublinks) && link.sublinks.map((item) => (
              <div key={item.text}>
                <Button data={item} buttonClassName="item-link" />
              </div>
            ))}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        key={headerLabel.id}
      >
        <div className="ant-dropdown-link flex flex-center">
          <span
            className="ant-dropdown-link-text"
            title={headerLabel.link}
          >
            {headerLabel.link}
          </span>

          <span className="link-icon">
            <Icon name="angleBottom" width="10" height="14" />
          </span>
        </div>
      </Dropdown>
    );
  }
  const buttonData = {
    text: headerLabel.link,
    pageSlug: { page: { slug: headerLabel.pageSlug.page.slug } },
    type: 'redirect',
  };

  return (
    <Button className="header-link" data={buttonData} />
  );
};

HeaderNavItem.propTypes = {
  headerLabel: shape({
    link: string.isRequired,
    sublinksBlock: arrayOf(shape()),
  }),
};

HeaderNavItem.defaultProps = {
  headerLabel: {},
};

export default HeaderNavItem;
