package net.opengis.filter.v_1_1_0.tests;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBElement;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;

import net.opengis.filter.v_1_1_0.FilterType;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Tests for the FilterType class.
 */
public class Filter_Test {

	/**
	 * Holder of the context
	 */
	private JAXBContext context;

	@Before
	public void initializeContext() throws JAXBException {
		this.context = JAXBContext.newInstance(FilterType.class.getPackage()
				.getName()
				+ ":"
				+ FilterType.class.getPackage().getName());
	}

	/**
	 * Verifies that a PropertyNameType object can be unmarshalled.
	 *
	 * @throws Exception
	 *             Thrown if there is a problem.
	 */
	@SuppressWarnings("unchecked")
	@Test
	public void testUnmarshallPropertyNameType() throws Exception {

		Unmarshaller unmarshaller = this.context.createUnmarshaller();
		JAXBElement<FilterType> filter = (JAXBElement<FilterType>) unmarshaller.unmarshal(getClass().getResource("Filter01.xml"));
		Assert.assertNotNull(filter);
	}

}
