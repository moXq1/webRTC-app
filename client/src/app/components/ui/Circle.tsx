import React from "react";
import styles from "./Circle.module.css";

interface CircleProps {}

export const Circle: React.FC<CircleProps> = ({}) => {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.circleSvg}>
      <path
        d="M105.511 15.5V3.86364H110.102C110.985 3.86364 111.737 4.0322 112.358 4.36932C112.979 4.70265 113.453 5.16667 113.778 5.76136C114.108 6.35227 114.273 7.03409 114.273 7.80682C114.273 8.57955 114.106 9.26136 113.773 9.85227C113.439 10.4432 112.956 10.9034 112.324 11.233C111.695 11.5625 110.934 11.7273 110.04 11.7273H107.114V9.75568H109.642C110.116 9.75568 110.506 9.67424 110.812 9.51136C111.123 9.3447 111.354 9.11553 111.506 8.82386C111.661 8.52841 111.739 8.18939 111.739 7.80682C111.739 7.42045 111.661 7.08333 111.506 6.79545C111.354 6.50379 111.123 6.27841 110.812 6.11932C110.502 5.95644 110.108 5.875 109.631 5.875H107.972V15.5H105.511Z"
        fill="white"
      />
      <path
        d="M126.441 16.919L128.144 8.35938L130.445 8.81717L130.148 10.3106L130.237 10.3284C130.499 9.82816 130.841 9.47902 131.262 9.28098C131.685 9.07922 132.136 9.02601 132.615 9.12134C132.734 9.14498 132.861 9.17791 132.995 9.22011C133.13 9.26231 133.246 9.30676 133.345 9.35346L132.926 11.4599C132.821 11.4043 132.673 11.3439 132.481 11.2788C132.29 11.2136 132.112 11.1647 131.949 11.1322C131.599 11.0628 131.272 11.0768 130.967 11.1745C130.666 11.2691 130.409 11.4343 130.196 11.67C129.987 11.9065 129.848 12.1993 129.778 12.5485L128.815 17.3912L126.441 16.919Z"
        fill="white"
      />
      <path
        d="M145.208 22.2977L148.548 14.2347L150.784 15.161L147.444 23.2239L145.208 22.2977ZM150.102 13.6606C149.769 13.5229 149.53 13.2946 149.383 12.9755C149.242 12.6544 149.235 12.3382 149.364 12.0267C149.492 11.7187 149.718 11.5031 150.044 11.3797C150.375 11.2543 150.707 11.2605 151.039 11.3982C151.371 11.5359 151.609 11.7653 151.75 12.0864C151.897 12.4054 151.906 12.7189 151.779 13.0269C151.65 13.3384 151.42 13.5568 151.089 13.6822C150.763 13.8055 150.434 13.7984 150.102 13.6606Z"
        fill="white"
      />
      <path
        d="M157.484 28.0737L162.333 20.8173L164.251 22.0989L163.395 23.3791L163.48 23.436C163.916 23.1118 164.392 22.9447 164.909 22.9348C165.426 22.9248 165.93 23.084 166.421 23.4123C166.919 23.7448 167.259 24.1522 167.442 24.6346C167.628 25.1139 167.638 25.6034 167.472 26.1033L167.548 26.1538C167.974 25.837 168.464 25.6836 169.017 25.6937C169.576 25.7026 170.122 25.885 170.654 26.2406C171.331 26.6931 171.737 27.276 171.87 27.9895C172.009 28.7019 171.816 29.4518 171.29 30.2392L168.029 35.1194L166.021 33.7778L169.017 29.2945C169.286 28.8913 169.381 28.5174 169.301 28.1728C169.222 27.8281 169.022 27.5484 168.7 27.3338C168.335 27.0897 167.972 27.0158 167.612 27.112C167.253 27.2052 166.948 27.4407 166.695 27.8186L163.734 32.25L161.783 30.9463L164.807 26.4204C165.045 26.0646 165.132 25.7127 165.068 25.3649C165.008 25.0192 164.812 24.7359 164.482 24.5149C164.258 24.3655 164.019 24.2875 163.763 24.2809C163.513 24.2733 163.269 24.3356 163.03 24.4677C162.794 24.5967 162.586 24.795 162.407 25.0627L159.497 29.4185L157.484 28.0737Z"
        fill="white"
      />
      <path
        d="M175.612 42.2021C175.219 41.8084 174.936 41.3892 174.765 40.9446C174.596 40.4973 174.557 40.0486 174.648 39.5987C174.744 39.1487 174.996 38.7201 175.403 38.313C175.746 37.9702 176.097 37.7452 176.456 37.638C176.815 37.5309 177.174 37.5148 177.533 37.5898C177.892 37.6648 178.245 37.8041 178.593 38.0077C178.944 38.2139 179.287 38.455 179.622 38.7309C180.018 39.0523 180.342 39.3067 180.594 39.4942C180.849 39.679 181.059 39.7875 181.225 39.8196C181.391 39.8518 181.54 39.8022 181.671 39.671L181.695 39.6469C181.949 39.3924 182.066 39.1152 182.045 38.8152C182.026 38.5179 181.87 38.2233 181.579 37.9313C181.27 37.6233 180.957 37.4465 180.638 37.401C180.322 37.3528 180.033 37.401 179.771 37.5456L178.316 35.8341C178.772 35.5395 179.254 35.3734 179.763 35.3359C180.274 35.2958 180.79 35.3882 181.309 35.6132C181.834 35.8381 182.343 36.1971 182.836 36.6899C183.179 37.0327 183.467 37.401 183.7 37.7947C183.936 38.1911 184.091 38.5956 184.166 39.0081C184.244 39.4232 184.221 39.8344 184.098 40.2415C183.977 40.6459 183.733 41.0316 183.366 41.3986L179.204 45.5609L177.581 43.9377L178.437 43.082L178.388 43.0338C178.097 43.1275 177.794 43.165 177.48 43.1463C177.17 43.1248 176.856 43.0391 176.54 42.8891C176.227 42.7364 175.918 42.5074 175.612 42.2021ZM177.284 41.5111C177.535 41.7628 177.807 41.9356 178.099 42.0293C178.394 42.1204 178.682 42.1351 178.963 42.0735C179.244 42.0119 179.493 41.8727 179.71 41.6557L180.365 41.0008C180.277 40.9821 180.171 40.9406 180.048 40.8763C179.93 40.812 179.801 40.7343 179.662 40.6433C179.525 40.5495 179.39 40.4544 179.256 40.358C179.125 40.2589 179.006 40.1692 178.899 40.0888C178.668 39.9174 178.446 39.7888 178.232 39.7031C178.018 39.6174 177.814 39.5879 177.621 39.6147C177.431 39.6388 177.256 39.7312 177.095 39.892C176.862 40.125 176.768 40.3875 176.814 40.6794C176.864 40.9714 177.021 41.2486 177.284 41.5111Z"
        fill="white"
      />
      <path
        d="M187.444 55.8073L194.7 50.9587L196.004 52.9098L194.738 53.7558L194.788 53.8314C195.327 53.6628 195.816 53.6575 196.254 53.8157C196.695 53.9718 197.052 54.2529 197.323 54.6592C197.391 54.76 197.457 54.8729 197.522 54.9978C197.587 55.1228 197.638 55.2367 197.675 55.3396L195.89 56.5328C195.855 56.4194 195.793 56.2719 195.703 56.0902C195.614 55.9086 195.523 55.7485 195.43 55.6099C195.232 55.3138 194.991 55.0924 194.706 54.9456C194.426 54.7999 194.128 54.7351 193.811 54.7512C193.496 54.7704 193.19 54.8789 192.894 55.0767L188.789 57.8199L187.444 55.8073Z"
        fill="white"
      />
      <path
        d="M193.502 73.2043C193.385 72.9209 193.298 72.6455 193.24 72.3782C193.181 72.1158 193.151 71.8904 193.151 71.7018L195.029 71.5143C195.057 71.8101 195.111 72.0645 195.191 72.2774C195.272 72.4937 195.397 72.6572 195.566 72.7676C195.736 72.8816 195.968 72.9354 196.26 72.9291L196.656 72.919L203.752 66.5911L204.726 68.9428L199.496 73.0648L199.531 73.1488L206.15 72.3811L207.131 74.7486L196.898 75.3155C196.402 75.3447 195.939 75.2966 195.51 75.1709C195.079 75.0503 194.695 74.8302 194.357 74.5108C194.016 74.1927 193.731 73.7573 193.502 73.2043Z"
        fill="white"
      />
      <path
        d="M214.108 105.068H216.136V114.625H214.108V111.062H204.5V108.631H214.108V105.068Z"
        fill="white"
      />
      <path
        d="M202.528 128.347C202.703 127.467 203.032 126.744 203.515 126.18C204.001 125.62 204.607 125.235 205.333 125.024C206.062 124.813 206.878 124.798 207.781 124.977C208.661 125.153 209.4 125.477 209.997 125.951C210.594 126.425 211.017 127.01 211.265 127.704C211.512 128.402 211.552 129.171 211.385 130.01C211.273 130.575 211.077 131.083 210.798 131.533C210.523 131.988 210.168 132.362 209.735 132.654C209.302 132.95 208.792 133.146 208.205 133.242C207.622 133.338 206.966 133.314 206.238 133.169L205.586 133.04L207.024 125.812L208.495 126.104L207.502 131.098C207.844 131.165 208.161 131.151 208.455 131.055C208.748 130.959 208.995 130.794 209.196 130.56C209.4 130.33 209.537 130.042 209.605 129.697C209.677 129.337 209.657 129 209.545 128.688C209.436 128.381 209.258 128.122 209.011 127.91C208.767 127.699 208.476 127.559 208.139 127.488L206.74 127.209C206.317 127.125 205.935 127.13 205.596 127.225C205.256 127.324 204.973 127.501 204.748 127.757C204.523 128.014 204.372 128.341 204.292 128.739C204.24 129.002 204.229 129.251 204.26 129.485C204.29 129.719 204.365 129.929 204.482 130.115C204.6 130.3 204.758 130.455 204.957 130.58L204.376 132.747C203.87 132.53 203.455 132.21 203.13 131.786C202.808 131.367 202.591 130.864 202.48 130.278C202.372 129.697 202.388 129.053 202.528 128.347Z"
        fill="white"
      />
      <path
        d="M205.948 148.107L202.516 148.42L204.706 151.104L203.756 153.398L200.692 149.393L195.667 150.122L196.613 147.838L200.059 147.402L197.92 144.683L198.876 142.374L201.916 146.437L206.905 145.797L205.948 148.107Z"
        fill="white"
      />
      <path
        d="M194.381 169.518L192.87 168.508L195.79 164.138L197.301 165.148L194.381 169.518ZM198.377 167.302L197.032 169.315L190.267 164.794C190.081 164.67 189.917 164.602 189.776 164.589C189.637 164.578 189.514 164.61 189.405 164.683C189.295 164.76 189.194 164.866 189.104 165.001C189.041 165.096 188.986 165.195 188.938 165.3C188.894 165.408 188.86 165.49 188.835 165.546L187.126 164.862C187.162 164.74 187.221 164.574 187.302 164.364C187.38 164.152 187.501 163.912 187.667 163.645C187.972 163.147 188.32 162.765 188.713 162.498C189.103 162.235 189.521 162.107 189.967 162.114C190.414 162.12 190.874 162.284 191.347 162.605L198.377 167.302Z"
        fill="white"
      />
      <path
        d="M164.345 189.911C164.726 189.657 165.136 189.517 165.575 189.493C166.016 189.471 166.437 189.555 166.836 189.743C167.232 189.934 167.558 190.22 167.813 190.601C168.069 190.985 168.209 191.396 168.231 191.831C168.253 192.273 168.168 192.691 167.977 193.088C167.789 193.487 167.504 193.814 167.123 194.069C166.739 194.326 166.327 194.464 165.889 194.483C165.45 194.508 165.033 194.424 164.636 194.234C164.239 194.048 163.912 193.763 163.655 193.379C163.401 192.998 163.263 192.587 163.241 192.146C163.216 191.706 163.298 191.287 163.487 190.888C163.675 190.494 163.961 190.168 164.345 189.911Z"
        fill="white"
      />
      <path
        d="M128.264 211.171C128.398 211.611 128.659 211.922 129.047 212.104C129.434 212.286 129.918 212.319 130.498 212.204C130.891 212.125 131.213 212.003 131.462 211.838C131.712 211.676 131.89 211.484 131.996 211.262C132.099 211.041 132.126 210.808 132.077 210.563C132.044 210.357 131.966 210.187 131.843 210.053C131.716 209.92 131.558 209.815 131.368 209.736C131.18 209.662 130.968 209.606 130.732 209.567C130.497 209.533 130.25 209.513 129.99 209.506L128.916 209.465C128.396 209.453 127.909 209.395 127.456 209.292C127.003 209.189 126.597 209.032 126.239 208.822C125.88 208.611 125.581 208.339 125.341 208.004C125.096 207.67 124.925 207.266 124.827 206.791C124.692 206.092 124.75 205.451 125.001 204.868C125.249 204.29 125.675 203.793 126.28 203.38C126.882 202.97 127.648 202.673 128.577 202.488C129.498 202.305 130.329 202.287 131.068 202.433C131.804 202.58 132.419 202.892 132.911 203.37C133.401 203.852 133.737 204.501 133.919 205.319L131.584 205.783C131.482 205.406 131.309 205.108 131.065 204.89C130.817 204.676 130.517 204.537 130.165 204.472C129.809 204.412 129.423 204.423 129.007 204.506C128.598 204.587 128.255 204.717 127.978 204.896C127.697 205.075 127.494 205.287 127.369 205.532C127.244 205.777 127.209 206.037 127.263 206.312C127.314 206.569 127.433 206.769 127.62 206.913C127.804 207.058 128.052 207.163 128.367 207.228C128.677 207.294 129.05 207.336 129.486 207.353L130.791 207.418C131.8 207.461 132.632 207.675 133.289 208.062C133.945 208.449 134.355 209.065 134.519 209.909C134.66 210.599 134.597 211.24 134.328 211.83C134.055 212.421 133.621 212.926 133.025 213.346C132.428 213.766 131.714 214.059 130.882 214.224C130.035 214.393 129.267 214.395 128.578 214.231C127.885 214.067 127.311 213.762 126.855 213.316C126.399 212.87 126.098 212.308 125.952 211.631L128.264 211.171Z"
        fill="white"
      />
      <path
        d="M110.057 204.33C110.955 204.33 111.727 204.511 112.375 204.875C113.019 205.242 113.515 205.761 113.864 206.432C114.212 207.106 114.386 207.903 114.386 208.824C114.386 209.722 114.212 210.509 113.864 211.188C113.515 211.866 113.025 212.394 112.392 212.773C111.756 213.152 111.009 213.341 110.153 213.341C109.578 213.341 109.042 213.248 108.545 213.062C108.045 212.881 107.61 212.606 107.239 212.239C106.864 211.871 106.572 211.409 106.364 210.852C106.155 210.299 106.051 209.652 106.051 208.909V208.244H113.42V209.744H108.33C108.33 210.093 108.405 210.402 108.557 210.67C108.708 210.939 108.919 211.15 109.188 211.301C109.453 211.456 109.761 211.534 110.114 211.534C110.481 211.534 110.807 211.449 111.091 211.278C111.371 211.112 111.591 210.886 111.75 210.602C111.909 210.322 111.991 210.009 111.994 209.665V208.239C111.994 207.807 111.915 207.434 111.756 207.119C111.593 206.805 111.364 206.562 111.068 206.392C110.773 206.222 110.422 206.136 110.017 206.136C109.748 206.136 109.502 206.174 109.278 206.25C109.055 206.326 108.864 206.439 108.705 206.591C108.545 206.742 108.424 206.928 108.341 207.148L106.102 207C106.216 206.462 106.449 205.992 106.801 205.591C107.15 205.193 107.6 204.883 108.153 204.659C108.703 204.439 109.337 204.33 110.057 204.33Z"
        fill="white"
      />
      <path
        d="M91.196 202.437C92.0728 202.612 92.79 202.947 93.3476 203.445C93.9009 203.945 94.2804 204.561 94.4862 205.293C94.6882 206.025 94.7032 206.823 94.531 207.689C94.3566 208.566 94.0346 209.301 93.565 209.895C93.0909 210.492 92.503 210.914 91.8013 211.16C91.0988 211.411 90.3147 211.45 89.4491 211.278C88.7024 211.129 88.0755 210.863 87.5685 210.481C87.0614 210.098 86.6932 209.629 86.4638 209.073C86.2344 208.518 86.1688 207.906 86.2669 207.238L88.5071 207.684C88.4853 208.124 88.5841 208.501 88.8036 208.815C89.0186 209.132 89.3434 209.333 89.7781 209.42C90.1459 209.493 90.4872 209.457 90.802 209.311C91.1124 209.168 91.3814 208.922 91.6091 208.573C91.8368 208.225 92.0042 207.781 92.1114 207.242C92.22 206.696 92.2381 206.217 92.1656 205.805C92.0894 205.392 91.9338 205.058 91.6988 204.802C91.4638 204.547 91.1624 204.383 90.7946 204.31C90.5234 204.256 90.2689 204.263 90.0313 204.332C89.7899 204.399 89.5776 204.525 89.3943 204.709C89.2066 204.896 89.0605 205.135 88.956 205.427L86.7158 204.981C86.883 204.335 87.1759 203.795 87.5944 203.36C88.0085 202.929 88.5219 202.629 89.1346 202.462C89.7473 202.294 90.4344 202.286 91.196 202.437Z"
        fill="white"
      />
      <path
        d="M73.9856 197.184C74.801 197.522 75.4344 197.987 75.8859 198.58C76.3323 199.175 76.5875 199.85 76.6515 200.607C76.714 201.366 76.5742 202.159 76.2321 202.985C75.8871 203.818 75.4246 204.479 74.8446 204.969C74.2632 205.462 73.605 205.759 72.8701 205.861C72.1302 205.964 71.3525 205.847 70.5371 205.509C69.7218 205.172 69.0908 204.705 68.6444 204.11C68.1929 203.517 67.936 202.841 67.8735 202.081C67.8096 201.325 67.9501 200.53 68.2951 199.698C68.6372 198.872 69.0989 198.212 69.6804 197.719C70.2604 197.23 70.9203 196.933 71.6602 196.83C72.3951 196.728 73.1703 196.846 73.9856 197.184ZM73.2576 198.912C72.8867 198.758 72.5335 198.735 72.198 198.842C71.8611 198.952 71.5536 199.165 71.2754 199.481C70.9937 199.794 70.7558 200.186 70.5615 200.655C70.3673 201.124 70.2588 201.569 70.2361 201.99C70.2099 202.409 70.2768 202.777 70.4368 203.094C70.5969 203.41 70.8624 203.645 71.2333 203.799C71.6078 203.954 71.9669 203.978 72.3108 203.87C72.6512 203.761 72.9623 203.55 73.2439 203.236C73.5221 202.92 73.7583 202.528 73.9526 202.059C74.1468 201.59 74.2571 201.146 74.2833 200.727C74.306 200.305 74.2356 199.936 74.072 199.618C73.9035 199.302 73.6321 199.067 73.2576 198.912Z"
        fill="white"
      />
      <path
        d="M56.0372 193.666L58.8403 189.47L60.8528 190.815L56.0042 198.072L54.0862 196.79L54.9416 195.51L54.8566 195.453C54.414 195.768 53.9216 195.921 53.3795 195.915C52.8353 195.911 52.294 195.729 51.7554 195.369C51.2515 195.033 50.8858 194.629 50.6583 194.158C50.4308 193.687 50.3499 193.177 50.4156 192.629C50.4792 192.084 50.6994 191.529 51.0761 190.966L54.1633 186.345L56.1758 187.69L53.3285 191.951C53.0286 192.393 52.9105 192.815 52.9742 193.218C53.0358 193.624 53.2681 193.961 53.6712 194.23C53.9421 194.411 54.2204 194.513 54.5061 194.535C54.7887 194.556 55.063 194.493 55.3289 194.347C55.5896 194.202 55.8257 193.975 56.0372 193.666Z"
        fill="white"
      />
      <path
        d="M43.8574 177.3C44.3261 177.768 44.6301 178.313 44.7694 178.935C44.9033 179.556 44.8457 180.214 44.5966 180.908C44.3422 181.601 43.8708 182.292 43.1824 182.981C42.4753 183.688 41.7736 184.162 41.0772 184.403C40.3781 184.647 39.7232 184.696 39.1125 184.552C38.4965 184.407 37.9622 184.108 37.5095 183.656C37.164 183.31 36.935 182.963 36.8225 182.615C36.7046 182.267 36.6618 181.935 36.6939 181.619C36.7207 181.303 36.7796 181.024 36.8707 180.783L36.8185 180.731L33.7249 183.824L32.0174 182.117L40.2455 173.889L41.9329 175.576L40.9446 176.564L41.0169 176.637C41.2687 176.546 41.5526 176.489 41.8687 176.468C42.1793 176.447 42.5061 176.497 42.849 176.621C43.1891 176.741 43.5253 176.968 43.8574 177.3ZM41.953 178.119C41.6771 177.843 41.3691 177.685 41.029 177.645C40.6834 177.605 40.3232 177.671 39.9482 177.842C39.5706 178.011 39.1983 178.279 38.8313 178.646C38.4644 179.013 38.1965 179.382 38.0278 179.754C37.859 180.127 37.7974 180.483 37.843 180.823C37.8885 181.163 38.0492 181.471 38.3251 181.747C38.6063 182.028 38.9197 182.189 39.2652 182.229C39.6107 182.27 39.9683 182.204 40.3379 182.032C40.7075 181.861 41.0705 181.597 41.4267 181.241C41.7856 180.882 42.0535 180.515 42.2302 180.14C42.4017 179.765 42.47 179.405 42.4351 179.059C42.395 178.714 42.2343 178.401 41.953 178.119Z"
        fill="white"
      />
      <path
        d="M32.4217 163.695C32.7311 164.158 32.9265 164.624 33.0078 165.094C33.0861 165.565 33.0366 166.013 32.8595 166.436C32.6772 166.859 32.3466 167.23 31.8679 167.55C31.4648 167.819 31.0767 167.972 30.7038 168.007C30.3309 168.042 29.9758 167.987 29.6384 167.844C29.301 167.7 28.9814 167.495 28.6796 167.227C28.3757 166.956 28.0865 166.653 27.812 166.317C27.4859 165.925 27.2176 165.612 27.0073 165.379C26.7938 165.148 26.6087 165 26.4521 164.937C26.2955 164.873 26.1401 164.892 25.9857 164.995L25.9574 165.014C25.6582 165.214 25.4898 165.463 25.4523 165.762C25.4127 166.057 25.5076 166.376 25.737 166.72C25.979 167.082 26.2518 167.316 26.5556 167.423C26.8562 167.532 27.1493 167.541 27.4349 167.451L28.5275 169.413C28.0234 169.613 27.5182 169.682 27.0117 169.619C26.5021 169.559 26.0145 169.368 25.5487 169.046C25.0777 168.723 24.6486 168.271 24.2614 167.692C23.992 167.289 23.7815 166.871 23.6298 166.44C23.4759 166.005 23.4025 165.578 23.4094 165.159C23.4142 164.736 23.5167 164.338 23.717 163.962C23.9141 163.589 24.2284 163.259 24.6599 162.97L29.5542 159.7L30.8295 161.609L29.8232 162.281L29.8611 162.338C30.1658 162.303 30.4699 162.325 30.7736 162.404C31.0742 162.486 31.3648 162.631 31.6455 162.84C31.9231 163.051 32.1818 163.336 32.4217 163.695ZM30.6477 164.047C30.4499 163.75 30.2169 163.528 29.9489 163.379C29.6777 163.232 29.3982 163.162 29.1103 163.167C28.8225 163.173 28.551 163.261 28.2959 163.431L27.5258 163.946C27.6088 163.981 27.7045 164.043 27.8128 164.13C27.9159 164.216 28.0268 164.317 28.1456 164.434C28.2613 164.552 28.3754 164.672 28.488 164.793C28.5974 164.915 28.6968 165.027 28.7862 165.126C28.9786 165.339 29.1716 165.509 29.365 165.635C29.5585 165.761 29.7524 165.829 29.9467 165.841C30.138 165.854 30.328 165.798 30.517 165.671C30.791 165.488 30.9342 165.249 30.9465 164.954C30.9535 164.658 30.8539 164.355 30.6477 164.047Z"
        fill="white"
      />
      <path
        d="M23.4718 148.043L15.4088 151.383L14.5108 149.215L15.9177 148.632L15.8829 148.548C15.3216 148.608 14.8414 148.518 14.4424 148.277C14.04 148.038 13.7452 147.693 13.5582 147.242C13.5119 147.13 13.4688 147.006 13.4292 146.871C13.3896 146.735 13.3617 146.614 13.3456 146.505L15.3299 145.684C15.3418 145.802 15.374 145.958 15.4263 146.154C15.4787 146.35 15.5367 146.524 15.6005 146.678C15.7368 147.007 15.9303 147.272 16.181 147.471C16.4268 147.669 16.7069 147.79 17.0212 147.837C17.334 147.879 17.6549 147.832 17.9839 147.696L22.5455 145.807L23.4718 148.043Z"
        fill="white"
      />
      <path
        d="M20.9236 129.798C20.9834 130.099 21.0154 130.386 21.0196 130.66C21.0268 130.929 21.012 131.155 20.9754 131.34L19.0969 131.158C19.127 130.862 19.1235 130.602 19.0866 130.378C19.049 130.15 18.9582 129.965 18.8142 129.824C18.6695 129.679 18.453 129.581 18.1649 129.53L17.7749 129.463L9.58091 134.285L9.08432 131.788L15.0178 128.766L15 128.677L8.35827 128.138L7.85835 125.625L18.0047 127.065C18.4972 127.133 18.9417 127.271 19.3381 127.478C19.7376 127.68 20.0716 127.971 20.3401 128.35C20.6123 128.728 20.8068 129.211 20.9236 129.798Z"
        fill="white"
      />
      <path
        d="M6.9303 94.5266L4.94087 94.1309L6.80531 84.7577L8.79474 85.1534L8.09973 88.6475L17.5231 90.5219L17.0486 92.907L7.62531 91.0325L6.9303 94.5266Z"
        fill="white"
      />
      <path
        d="M22.8291 73.9542C22.4856 74.7835 22.0219 75.4279 21.4381 75.8871C20.8522 76.3415 20.1828 76.6013 19.4301 76.6667C18.6738 76.7306 17.8704 76.5865 17.0201 76.2342C16.1907 75.8907 15.5294 75.4282 15.0364 74.8468C14.5433 74.2653 14.2429 73.6099 14.135 72.8806C14.0286 72.1477 14.1391 71.3858 14.4667 70.5949C14.6871 70.063 14.9779 69.6033 15.3393 69.2159C15.6986 68.8235 16.119 68.5262 16.6005 68.3238C17.0835 68.118 17.6221 68.0253 18.2162 68.046C18.8069 68.0651 19.4452 68.2168 20.1311 68.5009L20.7452 68.7553L17.9251 75.5636L16.5393 74.9896L18.4875 70.2862C18.1656 70.1529 17.8514 70.1047 17.5449 70.1418C17.2385 70.1788 16.9638 70.2926 16.7209 70.4831C16.4759 70.6686 16.286 70.9241 16.1512 71.2496C16.0106 71.589 15.9647 71.9226 16.0135 72.2503C16.0602 72.5731 16.1843 72.8623 16.3859 73.118C16.584 73.3722 16.8415 73.5671 17.1586 73.7025L18.4761 74.2482C18.8751 74.4135 19.2502 74.4828 19.6016 74.4561C19.9544 74.4259 20.266 74.307 20.5366 74.0992C20.8071 73.8915 21.0199 73.6004 21.1751 73.226C21.278 72.9775 21.3372 72.7355 21.3527 72.5001C21.3683 72.2646 21.3365 72.0444 21.2574 71.8394C21.1783 71.6345 21.0532 71.4515 20.8821 71.2904L21.8753 69.2787C22.3287 69.5895 22.6735 69.9845 22.9097 70.4636C23.1438 70.9378 23.2582 71.4731 23.2531 72.0695C23.2458 72.661 23.1045 73.2892 22.8291 73.9542Z"
        fill="white"
      />
      <path
        d="M23.33 53.9067L26.7571 54.2695L25.1324 51.2091L26.5119 49.1446L28.7354 53.6712L33.8062 53.9365L32.4331 55.9916L28.968 55.7468L30.5359 58.8309L29.147 60.9095L26.9582 56.331L21.9411 55.9853L23.33 53.9067Z"
        fill="white"
      />
      <path
        d="M38.8514 35.1632L40.137 36.4488L36.4207 40.1652L35.1351 38.8795L38.8514 35.1632ZM34.5003 36.5573L36.2118 34.8458L41.9651 40.5991C42.1231 40.7571 42.2704 40.8562 42.407 40.8964C42.5409 40.9339 42.6682 40.9272 42.7887 40.8763C42.9119 40.8227 43.0311 40.7383 43.1463 40.6232C43.2266 40.5428 43.3003 40.4558 43.3672 40.362C43.4315 40.2656 43.4811 40.1919 43.5159 40.1411L45.0587 41.1455C44.9997 41.258 44.91 41.4093 44.7895 41.5995C44.6716 41.7923 44.5056 42.0039 44.2913 42.2342C43.8949 42.6628 43.4784 42.9695 43.0418 43.1543C42.6079 43.3364 42.1727 43.3806 41.7361 43.2869C41.2995 43.1931 40.8803 42.9427 40.4785 42.5356L34.5003 36.5573Z"
        fill="white"
      />
      <path
        d="M72.2892 21.0219C71.8658 21.1973 71.4363 21.2542 71.0008 21.1927C70.5639 21.1277 70.168 20.9637 69.813 20.7007C69.4616 20.4363 69.1982 20.0923 69.0228 19.6689C68.846 19.242 68.789 18.8125 68.852 18.3805C68.917 17.9436 69.0817 17.5494 69.3462 17.198C69.6091 16.8431 69.9523 16.5779 70.3758 16.4025C70.8027 16.2256 71.2329 16.1705 71.6664 16.2369C72.1018 16.2984 72.4953 16.4614 72.8467 16.7258C73.2002 16.9853 73.4654 17.3285 73.6422 17.7555C73.8176 18.1789 73.8728 18.6091 73.8078 19.046C73.7463 19.4815 73.584 19.8767 73.321 20.2317C73.0601 20.5816 72.7162 20.845 72.2892 21.0219Z"
        fill="white"
      />
    </svg>
  );
};