import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';

const AdvertiseBanner = () => {
  return (
    <Background color="bg-white">
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="flex items-center justify-between rounded-xl border bg-white">
          <div className="flex-1 overflow-hidden rounded-l-xl border-l-4">
            <Image
              src="/assets/images/img3.png"
              alt="img3"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="rounded-lg bg-white p-4">
              <p className="mb-2 font-semibold text-primary-700">
                Quer Vender ou Alugar?
              </p>
              <h2 className="mb-4 mr-52 text-xl font-semibold">
                Anuncie grátis para mais de 100 mil pessoas todos os dias.
              </h2>
              <button className="mb-2 rounded-xl border border-purple-700 bg-white px-4 py-2 font-semibold text-purple-700 hover:bg-purple-50">
                <Link href="/">Buscar Imóveis</Link>
              </button>
              <div className="mt-2">
                <Link href="/">Saiba quanto vale seu imóvel →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default AdvertiseBanner;
