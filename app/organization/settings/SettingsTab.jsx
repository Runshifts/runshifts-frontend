"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Tabs = () => {
  const router = useRouter();

  const isTabActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <Link
            href={"/organization/settings/general"}
            passHref
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              isTabActive("/organization/settings/general")
                ? "border-green-500 text-green-500"
                : "border-transparent text-gray-500 dark:text-gray-400"
            }`}
          >
            General
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="/organization/settings/billing"
            passHref
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              isTabActive("/organization/settings/billing")
                ? "border-green-500 text-green-500"
                : "border-transparent text-gray-500 dark:text-gray-400"
            }`}
          >
            Billing
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="/organization/settings/plan"
            passHref
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              isTabActive("/organization/settings/plan")
                ? "border-green-500 text-green-500"
                : "border-transparent text-gray-500 dark:text-gray-400"
            }`}
          >
            Plan
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="/organization/settings/notification"
            passHref
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              isTabActive("/organization/settings/notification")
                ? "border-green-500 text-green-500"
                : "border-transparent text-gray-500 dark:text-gray-400"
            }`}
          >
            Notification
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
