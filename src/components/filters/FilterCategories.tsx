import { Col, Collapse, Form, Row, Tree } from "antd";
import { DataNode, TreeProps } from "antd/lib/tree";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "../../untils/string";
import getApi from "../../constant/http-common";
import axios from "axios";
import { getCategories } from "./api";
import "./filter.scss";

interface FilterCategoriesProps {
  onFilterCategoriesGroup: (values: any) => void;
}

const FilterCategories: React.FC<FilterCategoriesProps> = ({
  onFilterCategoriesGroup,
}) => {
  const { t } = useTranslation("filter");
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [treeData, setTreeData] = useState<any>([]);
  const [defaultData, setDefaultData] = useState<any>([]);
  const [treeDataSelect, setTreeDataSelect] = useState<any>([]);

  const data = getCategories();

  const loop = (dataNode: DataNode[]): DataNode[] =>
    dataNode.map((item: any) => {
      const index = item.attributes?.name.indexOf(searchValue);
      const title =
        index > -1 ? (
          <Row
            wrap={false}
            align="middle"
            justify="space-between"
            className="group truncate"
          >
            <Col className="truncate" title={item.title}>
              {capitalizeFirstLetter(item.title)}
            </Col>
          </Row>
        ) : (
          <Row
            wrap={false}
            align="middle"
            justify="space-between"
            className="group truncate"
          >
            <Col className="truncate" title={item.title}>
              {capitalizeFirstLetter(item.title)}
            </Col>
          </Row>
        );

      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });

  const onSelect: TreeProps["onSelect"] = (selectedKeys) => {
    onFilterCategoriesGroup(selectedKeys);
  };

  const mapTreeData = (trees: any, parentId?: string) => {
    return trees?.map((item: any) => ({
      key: item.id,
      title: item.attributes.name,
      parentId,
      children: item.categoryChilds
        ? mapTreeData(item.categoryChilds, item.id)
        : [],
    }));
  };

  const mapTreeDataSelect = (trees: any) => {
    return trees?.map((item: any) => ({
      value: item.id,
      title: item.name,
      children: item.categoryChilds
        ? mapTreeDataSelect(item.categoryChilds)
        : [],
    }));
  };

  const onExpand = (newExpandedKeys: string[] | any) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  useEffect(() => {
    const items = data;
    if (items) {
      setDefaultData(mapTreeData(items));
      setTreeData(mapTreeData(items));
      setTreeDataSelect(mapTreeDataSelect(items));
    }
  }, [data]);

  return (
    <>
      <Collapse defaultActiveKey="1" expandIconPosition="end">
        <Collapse.Panel header={t("categories")} key="1">
          <Form.Item name="categoryId_in" className="filter-commodity-group">
            <Tree
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              treeData={loop(treeData)}
              onSelect={onSelect}
              height={200}
            />
          </Form.Item>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default FilterCategories;
