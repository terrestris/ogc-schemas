package net.opengis.wps.v_2_0;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.util.List;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBElement;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;

import org.junit.Assert;
import org.junit.Test;

import net.opengis.gml.v_3_2.LinearRingType;

public class WpsExecuteTest {

	private static final JAXBContext CONTEXT;
	static {
		try {
			CONTEXT = JAXBContext.newInstance(net.opengis.wps.v_2_0.ObjectFactory.class.getPackage().getName() + ":"
					+ net.opengis.ows.v_2_0.ObjectFactory.class.getPackage().getName() + ":"
					+ net.opengis.gml.v_3_2.ObjectFactory.class.getPackage().getName());
		} catch (JAXBException jaxbex) {
			throw new ExceptionInInitializerError(jaxbex);
		}
	}
	
	@Test
	public void unmarshalsWpsExecute() throws JAXBException, IOException {
		
		Unmarshaller unmarshaller = CONTEXT.createUnmarshaller();
		
		try (InputStream is = getClass().getResourceAsStream("wpsExecute.xml")) {
			ExecuteRequestType executeRequest = ((JAXBElement<ExecuteRequestType>) unmarshaller.unmarshal(is)).getValue();
			LinearRingType linearRing = ((JAXBElement<LinearRingType>) executeRequest.getInput().get(0).getData().getContent().get(1)).getValue();
			Assert.assertEquals("-0.631235,46.307557 -0.262215,46.577225 0.106805,46.477874 -0.631235,46.307557",linearRing.getCoordinates().getValue()); 
		}
	}
}
