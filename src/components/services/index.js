import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Web Applications</ServicesH2>
          <ServicesP>
            Web platforms are a powerful way to create and manage digital content.
            We can build your website, mobile app, or web application.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Mobile Applications</ServicesH2>
          <ServicesP>
            IOS and Android applications are the best way to reach your customers
            and increase your sales. We can build your mobile app.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Web3 Integrations</ServicesH2>
          <ServicesP>
            Web 3 is the next generation of web technologies. It is the
            future of the web. We can integrate your web application with
            all blockchains.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Smart contracts</ServicesH2>
          <ServicesP>
            Smart contracts are a powerful way to create and manage on chain
            data. We can build your smart contract.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Token creation</ServicesH2>
          <ServicesP>
            Create your own token project, we help you to make sustainable tokenomics
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Dex listing</ServicesH2>
          <ServicesP>
            You created your token and you want to update in listing such as Binance, Uniswap. or simply promote in on social medias?
            We have strategies for that.
          </ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
