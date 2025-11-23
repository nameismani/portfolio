"use client";
import React from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  containerized?: boolean;
  containerClassName?: string;
};

const Section = ({
  className,
  children,
  id,
  containerized = true,
  containerClassName,
  ...rest
}: Props) => {
  return (
    <section
      id={id}
      className={clsx("px-1 py-12 md:py-24 md:px-4 relative ", className)}
      {...rest}
    >
      {containerized ? (
        <div
          className={clsx("container mx-auto max-w-5xl", containerClassName)}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </section>
  );
};

export default Section;
