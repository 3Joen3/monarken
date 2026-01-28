interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return <main className="w-11/12 mx-auto">{children}</main>;
}
