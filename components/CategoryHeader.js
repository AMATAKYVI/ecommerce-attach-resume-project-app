import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
function CategoryHeader() {
  const router = useRouter();
  return (
    <div className="bg-[rgb(45,54,77)] text-white font-semibold tracking-wide px-10 py-4">
      <Breadcrumb separator="-   -">
        <BreadcrumbItem>
          <BreadcrumbLink
            className="px-5"
            onClick={() => {
              router.push(`/category/Men`);
            }}
          >
            Men
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            className="px-5"
            onClick={() => {
              router.push(`/category/Women`);
            }}
          >
            Women
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            className="px-5"
            onClick={() => {
              router.push(`/category/Electronics`);
            }}
          >
            Electronics
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            className="px-5"
            onClick={() => {
              router.push(`/category/Jewelry`);
            }}
          >
            Jewelry
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            className="px-5"
            onClick={() => {
              router.push(`/category/Beauty`);
            }}
          >
            Beauty
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            className="px-5"
            onClick={() => {
              router.push(`/category/Kitchen`);
            }}
          >
            Kitchen
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default CategoryHeader;
