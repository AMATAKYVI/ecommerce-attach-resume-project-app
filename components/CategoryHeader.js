import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
function CategoryHeader() {
  return (
    <div className="bg-[rgb(45,54,77)] text-white font-semibold tracking-wide px-10 py-4">
      <Breadcrumb separator="-   -">
        <BreadcrumbItem>
          <BreadcrumbLink className="px-5">Men</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="px-5">Women</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="px-5">Electronics</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="px-5">Jewelry</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="px-5">Beauty</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="px-5">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default CategoryHeader;
