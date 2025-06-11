import { Typography } from "antd"

import { FacebookIcon, GithubIcon } from "src/assets/icons"

const Footer = () => {
  return (
    <div className="flex gap-2 mx-auto items-center justify-center">
      <Typography>
        Made by <span className="font-bold">nuhoangcodon99</span>
      </Typography>
      <div className="flex gap-1 items-center">
        <a
          className="text-inherit"
          href="https://github.com/nuhoangcodon99/social_downloader_extension"
          target="_blank">
          <GithubIcon className="size-6" />
        </a>
        <a href="https://facebook.com/bengokyeuanh.99" target="_blank">
          <FacebookIcon className="size-6" />
        </a>
      </div>
    </div>
  )
}

export default Footer
