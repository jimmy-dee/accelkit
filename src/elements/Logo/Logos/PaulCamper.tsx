/* eslint-disable max-len */
import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  hideText?: boolean;
}

const SvgPaulCamper = ({ hideText, ...props }: Props) => (
  <svg
    style={{
      clipRule: 'evenodd',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 100 29"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    {...props}
  >
    {!hideText && (
      <path d="M99.72 13.512c-.036-.041-.114-.086-.161-.077a12 12 0 0 1-1.85.129c-.871-.02-1.711-.627-2.082-.736s-.774-.137-1.008.044-.815 1.003-1.18 1.353c-1.062 1.229-5.11 3.12-5.213 2.51-.031-.134.122-.423.237-.444.859-.102 1.85-.527 2.622-.964 1.175-.695 1.509-1.878 1.492-2.145-.035-.377-.18-.735-.452-.947-.441-.297-1.79-.513-2.873.413-1.044.759-1.944 2.529-1.956 2.522-.128-.077-.202-.078-.282-.168.081-.311.323-.576.269-.928s-.554-1-1.675-.816c-.177.077-.978.354-1.324.581.039-.072.152-.501-.107-.628-.235-.115-.608.039-1.01.322-.401.282-3.954 3.218-4.034 3.252-.017.007-.099.072-.157.003-.188-.168.687-1.279.862-1.511.181-.239.814-.993.524-1.563-.118-.135-.34-.149-.617-.047-.674.249-3.384 2.242-3.654 2.412-.009-.042 1.207-1.681 1.424-1.955.22-.277.32-.745-.022-.883-.212-.086-.342-.014-.503.076-.356.2-3.809 2.757-3.92 2.82.03-.06 1.547-2.429 1.903-2.89.169-.218.243-.568.069-.814-.139-.198-.673-.174-.854-.029-.389.315-4.8 4.686-5.157 4.614-.453-.124.906-1.928 1.16-2.286.28-.395.574-.755.634-.878s-.033-.466-.162-.639c-.274-.2-.468-.137-.645.083-.176.22-.311.45-.458.632-.314.387-1.333 1.618-1.951 2.058-.208.158-1.782 1.414-2.064 1.131-.194-.361-.111-1.146.507-1.932.502-.639 2.289-2.617 2.96-2.492.261.101.335.555.176.856.053.126.181.137.219.098.143-.046.247-.2.345-.36.284-.459.325-1.175-.472-1.316-.147-.02-.225-.078-.755-.047-.494.063-1.706 1.063-2.359 1.659-.37.409-1.221.958-2.015 2.34-.161.131-1.722 1.126-2.299 1.361s-1.332.588-2.292.587-1.129-.534-.755-1.662c.535-1.198 2.022-2.616 2.479-3.117.717-.8 4.724-3.927 6.478-4.595.322-.123 1.089-.303 1.747.069.025.001.476.286.588.647.567 0 1.372-.534 1.175-.902s-.426-.901-1.494-1.035c-1.068-.135-1.959-.081-3.079.326-1.95.709-6.352 3.798-8.279 6.876-1.268 2.022-1.033 2.971-.473 3.613.268.306.943.596 1.563.54 2.859-.318 4.468-1.859 4.468-1.859s-.069.55.053.8c.231.41.72.654 1.196.654.812-.041 2.482-1.6 2.665-1.769.013.063-.327.592-.335 1.304 0 .55.53.457.758.487a1.84 1.84 0 0 0 .953-.456c.464-.411 3.519-3.055 3.726-3.29-.013.123-1.823 2.664-1.987 3.437-.015.246.322.297.565.305.259.009.457.043.657-.203.209-.257 2.813-2.38 3.074-2.559-.367.586-1.011 1.356-1.013 1.841-.001.485.209.546.406.556.41.021 3.322-2.202 3.727-2.476-.147.293-.852 1.673-.845 1.944.008.306.475.457.517.463.386.061.536.008.983-.213.327-.219 2.736-2.174 2.865-2.264-.012.032-.733.913-1.433 1.99a56 56 0 0 0-1.938 3.254c-.115.246.418.702.736.764.282-.251 1.764-2.945 1.951-3.254 1.013.226 4.008-.509 5.43-2.292.03.02.341.095.324.117-.096.381-.125.368-.203.784-.139.818.728 1.127 1.061 1.121 1.441-.024 4.714-2.118 4.945-2.256-.137.193-1.46 2.652-1.56 2.896-.019.049.069.191.114.194.285.014.728.062.985.02a.42.42 0 0 0 .396-.271c.05-.158.832-1.891 1.105-2.351.307-.565 1.217-1.759 1.217-1.759s.42.12.934.232c.515.111 1.484.152 1.982.017.215-.058 1.906-.835 1.731-1.029M85.398 15.75c-.419.403-2.883 1.673-3.682 1.61.364-.568 1.406-1.78 1.884-2.247.495-.648 1.342-.766 1.863-.766 1.113 0 .354.999-.065 1.403m3.337-.462c.119-.609.901-1.671 1.124-1.864.679-.663 1.597-.474 1.682-.389.657.951-2.1 2.448-2.806 2.253m-28.674-4.973c.358-.604.649-1.228.307-1.478-.356-.344-2.397.786-3.246 1.553-1.471 1.327-2.477 2.834-3.091 3.85-.237.394-1.077 1.709-1.273 1.937-.18.21-1.257 1.225-1.494 1.099-.514-.343.276-1.851.707-2.552.268-.421.42-.769.216-1-.119-.153-.292-.26-.56-.154-.141.056-2.214 3.011-2.518 2.979-.304-.031.173-1.687.648-2.437.203-.352.942-1.39.752-1.598-.182-.178-.363-.546-.589-.308a79 79 0 0 0-1.376 1.839c-.239.337-1.457 1.875-1.774 2.183s-1.059 1.052-1.267.921c-.116-.065.719-1.251.862-1.509.17-.308 1.184-1.782 1.215-2.078s.007-.581-.284-.756c-.139-.084-.252-.022-.337.117-.088.137-.278.346-.519.706-.411.612-1.099 1.563-1.664 2.059-.369.324-1.799 1.599-2.48 1.826-.237.085-.794-.071-.602-.447.388-.722 2.037-2.896 2.505-3.268s.781-.644 1.252-.778c.211-.06.382.037.486.199.093.144.116.225.003.404-.056.138.019.191.195.104.388-.469.282-.952.006-1.156-.277-.204-.291-.181-.585-.242-.225-.047-1.439.305-2.486 1.271-.453.464-.878.935-1.293 1.425-.613.711-1.151 1.743-1.234 2.183-.146.926.316 1.146.65 1.272.337.094.659.125.908.008.629-.291 2.205-1.709 2.504-1.986.018.018-.193.807-.176 1.273s.016.673.399.726c.302.023.265 0 .496-.099.514-.226 1.978-1.829 2.493-2.338-.146.274-.144.96-.07 1.254.106.417.382.551.693.535.274-.014.717-.281.932-.451.375-.295.741-.841.86-.966-.108.289-.144 1.242-.079 1.419.105.287.44.356.738.384.485.054 1.697-1.105 1.874-1.261.009.214.028.875.199 1.099.292.443.619.582 1.138.48.318-.062.617-.263.885-.447.305-.209 1.63-1.221 1.808-1.484.031-.047-.135-.198-.18-.171-.1.06-.189.136-.273.214-.119.11-1.478.946-1.976 1.096-.202.061-.366-.064-.355-.199.031-.693.463-1.758.707-2.174.193-.33.218-.51.571-.887.424-.203 1.7-.968 2.555-1.732.606-.495 1.86-1.855 2.217-2.459m-.534-.325c-.179.796-3.084 3.495-4.025 3.943.478-.637.922-1.24 1.462-1.813 1.039-1.103 2.619-2.291 2.461-2.224.106-.027.127.029.102.094m-9.518-.867c.005-.448.211-.556-.485-1.092-.569-.404-1.65-.835-3.685-.817-1.744.016-4.246.337-6.434 1.319-.68.306-2.877 1.324-4.44 2.296-.195.148-.438.336-.318.533.154.252.347.105.801-.093.513-.233 3.169-1.266 3.928-1.594 1.245-.539 3.085-.957 3.87-1.11.655-.129 2.918-.407 3.773-.298.988.125 2.075.504 2.398.818.023.022.058.07.053.074-.152.127-.969.479-2.032.963-1.062.484-6.922 2.569-7.148 2.7-.226.13-.439.115-.364.423.041.168.286.108.405.095.639-.068 2.585-.834 3.805-1.143 1.219-.309 3.142-1.087 3.875-1.429.51-.239 2.1-1.118 1.998-1.645m-14.008 6.404c-.486.788-1.01 2.033-.992 2.457s.081.606.341.674c.105-.068.206-.343.283-.607.076-.265.49-1.04 1.093-1.909.603-.87 1.24-1.67 1.865-2.502a62 62 0 0 1 1.447-1.713c.356-.397.716-.793 1.104-1.164.133-.127.09-.206.055-.333-.056-.208-.096-.297-.238-.431a.5.5 0 0 0-.704.006c-.146.14-.264.303-.405.447-.304.314-2.198 2.614-2.466 3.018-.189.285-.896 1.269-1.383 2.057" />
    )}
    <path
      d="M.014 7.277a1.7 1.7 0 0 0 0 .334c.342 4.284.702 9.137 1.738 13.93.04.352.51 1.024.789 1.265 2.851 2.404 6.372 4.437 9.505 5.796a2.36 2.36 0 0 0 1.828 0c3.246-1.356 6.902-3.406 9.814-5.827.273-.238.736-.911.773-1.266.902-4.783 1.171-9.615 1.448-13.929q.009-.094.006-.188a2 2 0 0 0-.371-1.09 1.4 1.4 0 0 0-.287-.296C22.044 3.512 17.501 1.451 13.913.152c-.418-.198-1.484-.198-1.901 0C8.418 1.449 3.874 3.516.661 6.011a1.3 1.3 0 0 0-.231.221 2 2 0 0 0-.415 1.045"
      style={{
        fill: '#eeece4',
        fillRule: 'nonzero',
      }}
    />
    <path
      d="M8.395 11.623a1 1 0 0 0 0 .151c.128 1.932.255 4.12.618 6.281.048.209.144.404.28.57a14.2 14.2 0 0 0 3.378 2.614c.202.11.448.11.65 0a14 14 0 0 0 3.487-2.628c.135-.166.229-.361.276-.57.32-2.157.416-4.337.51-6.282a1.1 1.1 0 0 0-.127-.577.6.6 0 0 0-.104-.127c-1.148-1.125-2.755-2.056-4.031-2.64a.9.9 0 0 0-.675 0c-1.275.584-2.892 1.518-4.033 2.643a.5.5 0 0 0-.082.1 1.05 1.05 0 0 0-.148.472"
      style={{
        fill: '#f0d0ad',
        fillRule: 'nonzero',
      }}
    />
    <path
      d="M16.326 7.282s-.055-.001-.078.016a.07.07 0 0 0-.027.075.9.9 0 0 1-.021.455.07.07 0 0 1-.054.055.07.07 0 0 1-.074-.025 5.38 5.38 0 0 0-3.527-1.518.07.07 0 0 0-.076.042.07.07 0 0 0 .02.084q.068.072.119.156a.073.073 0 0 1-.087.104c-1.17-.404-1.939-.357-2.21-.319a.07.07 0 0 0-.052.107c.246.424.287.935.114 1.392a.074.074 0 0 1-.079.049.07.07 0 0 1-.063-.067 1.15 1.15 0 0 0-.278-.668.074.074 0 0 0-.085-.019.07.07 0 0 0-.043.075c.013.4-.133.789-.407 1.083-.598.562-.801 1.012-.87 1.259a.07.07 0 0 1-.064.04.07.07 0 0 1-.066-.039 1 1 0 0 1-.056-.143.073.073 0 0 0-.136 0c-.527 1.24-.182 3.43-.086 4.182.031.243.415 3.163.518 4.055.068.59.265 1.909.476 2.221.309.458 1.435 1.372 2.001 1.855.567.483.819.355 1.876.355s1.357.223 1.949-.285c.592-.509 1.5-1.044 1.913-1.908.275-.576.721-4.201.798-4.854.032-.205.058-.477.058-.477.893-5.566-.833-7.015-1.403-7.338m-3.294 12.986c-1.075 0-1.946-.699-1.946-1.17 0-.415.676-.443 1.571-.519.128-.01.59-.012.693 0 .925.066 1.63.1 1.63.524 0 .471-.871 1.172-1.948 1.172zm-1.274-1.254a.05.05 0 0 0-.049.009.04.04 0 0 0-.008.048c.093.199.401.641 1.29.641.89 0 1.267-.437 1.396-.633a.04.04 0 0 0-.004-.049.04.04 0 0 0-.048-.013c-.427.17-.883.258-1.344.261a2.85 2.85 0 0 1-1.233-.253zm5.101-1.542c-.22.38-1.048.993-1.416.993s-.353-.169-.727-.442c-.592-.433-.875-.064-1.71-.064-.836 0-1.119-.369-1.711.064-.374.273-.36.442-.727.442-.368 0-1.264-.699-1.416-.993-.128-.229-.417-1.731-.536-2.49-.107-.904-.138-1.518.073-2.024.262-.633.674-.582.629-.917s-.536-1.012.075-1.052c.611-.039 2.833 1.383 4.565 1.355 1.733-.027 1.771-.656 2.096-.995s1.543 1.102 1.404 2.511c-.287 2.94-.426 3.319-.601 3.618zm-3.838-2.025a.014.014 0 0 0-.014-.014.014.014 0 0 0-.014.014c-.111.306-.624 1.741-.595 1.897.026.14.502.193.708.21a.026.026 0 0 0 .029-.017q.006-.018-.008-.032c-.119-.092-.351-.211-.351-.431 0-.274.245-1.625.245-1.625zm-3.127-.641a2.06 2.06 0 0 1 1.43-.253c.17.08.319.197.436.342a.01.01 0 0 1 0 .013.01.01 0 0 1-.012.002 4 4 0 0 0-.383-.168.39.39 0 0 1-.389.386.39.39 0 0 1-.389-.411q-.35.019-.689.112c-.012 0-.019-.011-.009-.018zm6.14 0a2.06 2.06 0 0 0-1.43-.253c-.17.08-.319.197-.436.342a.01.01 0 0 0 0 .013.01.01 0 0 0 .012.002q.186-.095.383-.168c0 .213.174.386.389.386a.39.39 0 0 0 .389-.411q.35.019.689.112c.01 0 .019-.011.009-.018zm-.554-.946c-.564.058-1.148.253-1.307.219h-.018c-.205-.081-.364-.182-.283-.243.102-.083.988-.272 1.454-.281.106-.009.902.163 1.19.342.033.02.087.059.047.066-.039.006-.575-.15-1.084-.098zm-5.033 0c.563.058 1.148.253 1.307.219h.018c.205-.081.364-.182.283-.243-.102-.083-.989-.272-1.454-.281-.106-.009-.902.163-1.19.342-.034.02-.087.059-.048.066.04.006.576-.15 1.085-.098z"
      style={{
        fill: '#513e2f',
        fillRule: 'nonzero',
      }}
    />
    <path
      d="M24.423 7.013a1.5 1.5 0 0 0-.297-.304c-1.149-.893-4.454-3.197-10.229-5.282-.428-.202-1.435-.205-1.851-.006C6.25 3.516 2.947 5.824 1.795 6.709q-.134.101-.24.229a2 2 0 0 0-.408 1.376l.037.469c.295 3.716.63 7.921 1.523 12.053.043.38.499 1.012.773 1.253 2.356 1.984 5.485 3.892 8.584 5.235a2.3 2.3 0 0 0 1.786 0c3.235-1.352 6.468-3.272 8.87-5.267.27-.235.717-.875.755-1.238.765-4.049 1.021-8.181 1.258-11.825l.046-.711a2 2 0 0 0-.369-1.271m0 1.094q.005.075 0 .149l-.046.718c-.231 3.635-.494 7.753-1.255 11.794-.029.264-.415.826-.63 1.012-2.372 1.971-5.571 3.87-8.777 5.21a1.94 1.94 0 0 1-1.491 0c-3.07-1.33-6.166-3.217-8.495-5.179-.221-.188-.616-.759-.648-1.032-.893-4.119-1.225-8.32-1.519-12.019l-.037-.472a1.3 1.3 0 0 1 0-.264c.028-.306.144-.598.333-.842q.078-.094.177-.168C3.16 6.127 6.427 3.85 12.188 1.769a2 2 0 0 1 .765-.114c.273-.009.544.034.8.126 5.741 2.074 9.008 4.351 10.146 5.234q.128.096.223.226c.183.26.287.568.298.885"
      style={{
        fillRule: 'nonzero',
      }}
    />
  </svg>
);
export default SvgPaulCamper;
