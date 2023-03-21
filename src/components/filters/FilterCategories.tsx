import {
  Checkbox,
  Col,
  Collapse,
  Form,
  Input,
  Row,
  Space,
  Tooltip,
  Tree,
} from "antd";
import { DataNode, TreeProps } from "antd/lib/tree";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  capitalizeFirstLetter,
  toNonAccentVietnamese,
} from "../../untils/string";
import getApi from "../../constant/http-common";
import axios from "axios";
import { getCategories } from "./api";
import "./filter.scss";
import { RiSearchLine } from "react-icons/ri";

interface FilterCategoriesProps {
  onFilterCategoriesGroup?: (values: any) => void;
  name?: string;
  header: string;

  placeholder?: string;
  autoOpen?: boolean;
}

const FilterCategories = memo(
  ({
    onFilterCategoriesGroup,
    name,
    header,
    placeholder,
    autoOpen,
  }: FilterCategoriesProps) => {
    const { t } = useTranslation(["filter", "service"]);

    const [searchCate, setSearchCate] = useState("");

    const data = getCategories(searchCate);
    const changeSearch = (value: string) => {
      setSearchCate(value.trim());
    };

    return (
      <Collapse
        expandIconPosition="end"
        defaultActiveKey={autoOpen ? "1" : "2"}
        className="filter-by-creator"
      >
        <Collapse.Panel header={header} key="1">
          <Input
            placeholder={t("search")}
            prefix={<RiSearchLine />}
            className="mb-3"
            onChange={(e) => changeSearch(e.target.value)}
          />
          <Form.Item name={name}>
            <Checkbox.Group>
              <Space direction="vertical">
                {data
                  .filter((x: any) =>
                    toNonAccentVietnamese(
                      x?.attributes?.name
                        ? x.attributes?.name.toLocaleLowerCase()
                        : ""
                    ).includes(
                      toNonAccentVietnamese(searchCate.toLocaleLowerCase())
                    )
                  )
                  .map((value: any) => (
                    <Checkbox key={value?.id} value={value?.id}>
                      <Tooltip placement="right" title={value.attributes?.name}>
                        <span className="line-clamp line-clamp-1">
                          {t(value.attributes?.name, { ns: "service" })}
                        </span>
                      </Tooltip>
                    </Checkbox>
                  ))}
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </Collapse.Panel>
      </Collapse>
    );
  }
);

export default FilterCategories;
